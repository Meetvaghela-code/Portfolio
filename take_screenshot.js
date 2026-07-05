import puppeteer from 'puppeteer';

(async () => {
  try {
    console.log("Launching headless browser...");
    const browser = await puppeteer.launch({ 
      defaultViewport: { width: 1920, height: 1080 },
    });
    const page = await browser.newPage();
    
    console.log("Navigating to portfolio (Vite dev server)...");
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 60000 });
    
    console.log("Waiting 13 seconds for the loading screen and animations to finish...");
    await new Promise(resolve => setTimeout(resolve, 13000));
    
    console.log("Capturing screenshot...");
    const screenshotPath = 'portfolio_showcase.png';
    await page.screenshot({ path: screenshotPath, fullPage: false });
    
    await browser.close();
    console.log(`Screenshot saved successfully as ${screenshotPath}!`);
  } catch (error) {
    console.error("Failed to capture screenshot:", error);
    process.exit(1);
  }
})();
