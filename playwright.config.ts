import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env['CI'],
  retries: process.env['CI'] ? 2 : 0,
  workers: process.env['CI'] ? 1 : undefined,
  reporter: [
    ['html'],
    ['list'],
  ],

  // Shared settings for all projects
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    headless: false,
    ignoreHTTPSErrors: true,
  },

 projects: [
  {
    name: 'chromium',
    use: {
      browserName: 'chromium',
      viewport: null,
      launchOptions: {
        args: ['--start-maximized'],
      },
    },
  },
  {
    name: 'firefox',
    use: {
      browserName: 'firefox',
      viewport: { width: 1920, height: 1080 },
      launchOptions: {
        args: ['-width', '1920', '-height', '1080'],
      },
    },
  },
  {
    name: 'webkit',
    use: {
      browserName: 'webkit',
      headless: true,              // ✅ Override global headless: false for WebKit only
      viewport: { width: 1920, height: 1080 },
    },
  },
],
  
  
});