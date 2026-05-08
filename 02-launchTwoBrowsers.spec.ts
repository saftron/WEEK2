
import {chromium,test} from "@playwright/test"

test ("To launch two browsers with different URL", (async () => {
  // 1. Launch Chromium and open the first URL
  const browser1 = await chromium.launch({ headless: false, channel: 'chrome' });
  const context1 = await browser1.newContext();
  const page1 = await context1.newPage();
  await page1.goto('https://www.redbus.in/');
  const pageTitle1 = await page1.title()
  const url1 = page1.url()
  console.log(`Page title and URL of RedBus in Chrome is "${pageTitle1}", - ${url1}`);
  

  // 2. Launch Edge and open the second URL
  const browser2 = await chromium.launch({ headless: false, channel: 'msedge' });
  const context2 = await browser2.newContext();
  const page2 = await context2.newPage();
  await page2.goto('https://www.flipkart.com/');
  const url2 = page2.url()
  const pageTitle2 = await page2.title()
  console.log(`Page title and URL of Flipkart in MSEdge is "${pageTitle2}", - ${url2}`);

}))