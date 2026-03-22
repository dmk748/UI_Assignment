import { defineConfig } from '@playwright/test';
import { ENV } from './.env';


export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  expect: {
    timeout: 5000
  },

  reporter: [
    ['html']
  ],

  use: {
    // UI Base URL
    baseURL: ENV.BASE_URL,

    // Browser settings
    headless: false,
    viewport: { width: 1280, height: 720 },

    // Debugging
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium'
      }
    }
  ]
});