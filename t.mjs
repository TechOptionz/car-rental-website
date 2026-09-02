import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new' });
const p = await b.newPage();
p.on('requestfailed', r => console.log('FAIL', r.url().slice(0, 90)));
await p.setViewport({ width: 320, height: 850, isMobile: true, hasTouch: true });
console.log('going');
await p.goto('http://localhost:3111/fleet', { waitUntil: 'domcontentloaded', timeout: 20000 });
console.log('ok');
await b.close();
