let page;
let pageActions;
let pagePackages;
let pageSecurity;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
}, 60000);

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
    await page.setDefaultTimeout(10000);
    await page.setDefaultNavigationTimeout(20000);
  }, 10000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
    await page.setDefaultTimeout(10000);
    await page.setDefaultNavigationTimeout(20000);
  }, 10000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team");
    await page.setDefaultTimeout(10000);
    await page.setDefaultNavigationTimeout(20000);
  }, 10000);
});

test("One new test the h3 header content'", async () => {
  pageActions = await browser.newPage();
  await pageActions.goto("https://github.com/features/actions");
  const linkActions = await pageActions.$("body > div.logged-out.env-production.page-responsive.overflow-x-hidden > div.application-main > main > div.overflow-x-hidden.overflow-y-hidden > div > div > div > div.col-12.text-center.text-lg-left.mx-auto.mx-lg-0.py-8.position-relative > h3");
  await linkActions.click();
  await pageActions.waitForSelector('h3');
  const titleActions = await pageActions.title();
  expect(titleActions).toEqual('Features • GitHub Actions · GitHub');
  await pageActions.setDefaultTimeout(10000);
  await pageActions.setDefaultNavigationTimeout(20000);
}, 10000);

test("Second new test the h4 header content'", async () => {
  pagePackages = await browser.newPage();
  await pagePackages.goto("https://github.com/features/packages");
  const linkPackages = await pagePackages.$("body > div.logged-out.env-production.page-responsive > div.application-main > main > div.position-relative.width-full > div:nth-child(2) > div > h4");
  await linkPackages.click();
  await pagePackages.waitForSelector('h4');
  const titlePackages = await pagePackages.title();
  expect(titlePackages).toEqual('GitHub Packages: Your packages, at home with their code · GitHub');
  await pagePackages.setDefaultTimeout(10000);
  await pagePackages.setDefaultNavigationTimeout(20000);
}, 10000);

test("Third new test the h1 header content'", async () => {
  pageSecurity = await browser.newPage();
  await pageSecurity.goto("https://github.com/features/security");
  const linkSecurity = await pageSecurity.$("body > div.logged-out.env-production.page-responsive.header-dark > div.application-main > main > div.overflow-hidden > div > div.position-relative.z-1.container-xl.mx-auto.px-3.pt-6.py-md-12.height-full.d-flex.flex-column.flex-justify-center > div > h1");
  await linkSecurity.click();
  await pageSecurity.waitForSelector('h1');
  const titleSecurity = await pageSecurity.title();
  expect(titleSecurity).toEqual('Features · Security · GitHub');
  await pageSecurity.setDefaultTimeout(10000);
  await pageSecurity.setDefaultNavigationTimeout(20000);
}, 10000);
