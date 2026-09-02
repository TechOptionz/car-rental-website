import puppeteer from "puppeteer-core";
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new" });
const p = await b.newPage();
await p.setViewport({ width: 320, height: 900, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
await p.goto("http://localhost:3111/", { waitUntil: "load", timeout: 60000 });
const S = "C:/Users/Hp/AppData/Local/Temp/claude/d--Car-rental-website/9c7cedc6-3e9b-4523-8304-1413a3721e14/scratchpad";
await p.screenshot({ path: S + "/home-320.png" });
// open menu at 320
await p.click('button[aria-label="Open menu"]');
await new Promise(r => setTimeout(r, 300));
await p.screenshot({ path: S + "/menu-320.png" });
await b.close();
