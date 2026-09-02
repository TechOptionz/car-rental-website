import puppeteer from "puppeteer-core";
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new" });
const p = await b.newPage();
await p.setViewport({ width: 1280, height: 900 });
await p.goto("http://localhost:3111/", { waitUntil: "domcontentloaded" });
await new Promise(r => setTimeout(r, 600));
const armed = await p.evaluate(() => [...document.querySelectorAll(".reveal-group")].map(el => ({
  pending: el.classList.contains("reveal-pending"),
  childOpacity: getComputedStyle(el.children[0]).opacity,
})));
console.log("after load (no scroll):", JSON.stringify(armed));
await p.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));
await new Promise(r => setTimeout(r, 900));
const revealed = await p.evaluate(() => [...document.querySelectorAll(".reveal-group")].map(el => ({
  inCls: el.classList.contains("reveal-in"),
  childOpacity: getComputedStyle(el.children[0]).opacity,
})));
console.log("after scroll:", JSON.stringify(revealed));
// reduced motion: nothing should be hidden, ever
const p2 = await b.newPage();
await p2.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
await p2.setViewport({ width: 1280, height: 900 });
await p2.goto("http://localhost:3111/", { waitUntil: "domcontentloaded" });
await new Promise(r => setTimeout(r, 600));
const rm = await p2.evaluate(() => [...document.querySelectorAll(".reveal-group")].map(el => getComputedStyle(el.children[0]).opacity));
console.log("reduced-motion child opacities:", JSON.stringify(rm));
// JS-disabled: content visible
const p3 = await b.newPage();
await p3.setJavaScriptEnabled(false);
await p3.setViewport({ width: 1280, height: 900 });
await p3.goto("http://localhost:3111/", { waitUntil: "domcontentloaded" });
const nojs = await p3.evaluate(() => [...document.querySelectorAll(".reveal-group")].map(el => getComputedStyle(el.children[0]).opacity));
console.log("no-JS child opacities:", JSON.stringify(nojs));
await b.close();
