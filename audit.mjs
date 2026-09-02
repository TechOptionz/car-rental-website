import puppeteer from "puppeteer-core";
const launchOpts = {
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new",
  protocolTimeout: 120000,
};
const routes = ["/", "/services", "/fleet", "/pricing", "/how-it-works", "/faq", "/service-areas", "/about", "/contact"];
const widths = [320, 375, 390, 414, 768];
const findings = [];

for (const r of routes) {
  console.error("route", r);
  const browser = await puppeteer.launch(launchOpts);
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on("request", (req) => (req.resourceType() === "image" ? req.abort() : req.continue()));
  for (const w of widths) {
    await page.setViewport({ width: w, height: 850, isMobile: w < 960, hasTouch: w < 960 });
    await page.goto("http://localhost:3111" + r, { waitUntil: "domcontentloaded", timeout: 60000 });
    await new Promise((res) => setTimeout(res, 400));
    const res = await page.evaluate(() => {
      const out = { overflow: [], smallTargets: [], clipped: [], docOverflow: 0 };
      const iw = window.innerWidth;
      if (document.documentElement.scrollWidth > iw) out.docOverflow = document.documentElement.scrollWidth - iw;
      for (const el of document.querySelectorAll("body *")) {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && (rect.right > iw + 1 || rect.left < -1)) {
          const cs = getComputedStyle(el);
          if (cs.position === "fixed") continue;
          out.overflow.push(
            el.tagName + "." + (typeof el.className === "string" ? el.className.split(" ")[0] : "") +
              " r=" + Math.round(rect.right) + " l=" + Math.round(rect.left) + " :: " +
              (el.textContent || "").slice(0, 40).trim()
          );
          if (out.overflow.length > 5) break;
        }
      }
      for (const el of document.querySelectorAll("a, button, summary, input, select")) {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) continue;
        if (rect.height < 40 || rect.width < 40) {
          out.smallTargets.push(
            `${el.tagName} ${Math.round(rect.width)}x${Math.round(rect.height)} "${(el.getAttribute("aria-label") || el.textContent || "").slice(0, 30).trim()}"`
          );
        }
      }
      for (const el of document.querySelectorAll("p, h1, h2, h3, li, span")) {
        if (el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).overflow === "hidden") {
          out.clipped.push(el.tagName + ": " + (el.textContent || "").slice(0, 40));
        }
      }
      return out;
    });
    if (res.docOverflow) findings.push(`${r} @${w}px: DOC OVERFLOW +${res.docOverflow}px`);
    for (const o of res.overflow) findings.push(`${r} @${w}px: element overflow: ${o}`);
    for (const c of res.clipped) findings.push(`${r} @${w}px: clipped text: ${c}`);
    if (w === 390) {
      const uniq = [...new Set(res.smallTargets)];
      if (uniq.length) findings.push(`${r} @390px small targets (<40px): ${uniq.join(" | ")}`);
    }
  }
  await browser.close();
}
console.log(findings.length ? findings.join("\n") : "NO LAYOUT FINDINGS");
