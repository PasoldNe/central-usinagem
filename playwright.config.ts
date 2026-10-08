import { defineConfig } from '@playwright/test'

const production = process.env.TEST_PRODUCTION === '1'
const port = production ? 4173 : 5173
const baseURL = `http://127.0.0.1:${port}`

export default defineConfig({
  testDir: './tests',
  outputDir: './artifacts/test-results',
  reporter: 'list',
  use: {
    baseURL,
    browserName: 'chromium',
    launchOptions: process.env.CHROMIUM_EXECUTABLE_PATH ? { executablePath: process.env.CHROMIUM_EXECUTABLE_PATH } : {},
  },
  webServer: {
    command: production ? `npm run preview -- --port ${port}` : `npm run dev -- --port ${port}`,
    url: baseURL,
    reuseExistingServer: true,
  },
})
