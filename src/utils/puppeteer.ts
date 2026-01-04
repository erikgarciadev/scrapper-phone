import puppeteer from "puppeteer";

export const getBrowser = () => {
  return puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", '--disable-blink-features=AutomationControlled'], // IMPORTANTE en Render o entornos cloud
  });
};
