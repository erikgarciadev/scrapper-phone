import puppeteer from "puppeteer";

export const getBrowser = () => {
  return puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"], // IMPORTANTE en Render o entornos cloud
  });
};
