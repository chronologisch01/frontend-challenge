/**
 * @jest-environment puppeteer
 */


// I have no idea how to use Jest
// I used the following tutorial: https://blog.logrocket.com/end-to-end-testing-react-jest-puppeteer/
// Edit: If I say I used the tutorial what I mean is I copy-pasted the first code example. 

 import puppeteer from "puppeteer";


describe("index.tsx", () => {
  let browser:any;
  let page:any;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  jest.setTimeout(1000000);

  it("contains the budget", async () => {
    await page.goto("http://localhost:3000/extension");
    await page.waitForSelector(".budget-div");
    const text = await page.$eval(".budget-div", (e:any) => e.textContent);
    expect(text).toContain("Budget to beat:  351 €");
  });

  afterAll(() => browser.close());
});
