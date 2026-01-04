import { getBrowser } from "@/utils/puppeteer";
import { telegramService } from "../telegram";


export const getArticlePrice = async (url: string, selector: string, place?: string): Promise<string | null> => {
    const browser = await getBrowser();
    const page = await browser.newPage();

    try {
        // Set a user agent to avoid being blocked easily
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

        await page.setExtraHTTPHeaders({
            'accept-language': 'es-ES,es;q=0.9,en;q=0.8'
        });

        //console.log(`Navigating to ${url}...`);
        const response = await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

        if (response?.status() === 403) {
            await page.screenshot({ path: 'blocked.png', fullPage: true });
            throw new Error('Blocked in GitHub Actions');
        }

        console.log(place + ' Status:', response?.status());

        //console.log(`Using selector: ${selector}`);
        try {
            await page.waitForSelector(selector, { timeout: 35000 });
        } catch (e) {
            telegramService.sendMessage(`Timeout waiting for selector ${place}`);
            console.warn(`Timeout waiting for selector ${selector}`);
            return null; // Return null if element not found within timeout
        }

        const price = await page.$eval(selector, (el) => el.textContent?.trim());
        //console.log(`Found price: ${price}`);

        return price || null;

    } catch (error) {
        telegramService.sendMessage(`Error scraping price for ${place}`);
        console.error("Error scraping price:", error);
        return null;
    } finally {
        await browser.close();
    }
};
