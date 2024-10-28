import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';

dotenv.config();
const REACT_APP_URL = process.env.PLAYWRIGHT_TEST_URL || 'http://localhost:5173';

test.describe('Locations, Map, Error Messages', () => {
  test('As a user of City Explorer, I want to enter the name of a location so that I can see the exact latitude and longitude of that location.', async ({ page }) => {
    await page.goto(REACT_APP_URL);
    await page.waitForLoadState('networkidle');

    const searchQuery = 'seattle';
    await page.getByRole('textbox').fill(searchQuery);
    await page.getByRole('button', { name: /explore/i }).click();
    await expect(page.getByText(/47/)).toBeVisible();
    await expect(page.getByText(/122/)).toBeVisible();
  });

  test('As a user, I want to see a map of the city so that I can see the layout of the area I want to explore.', async ({ page }) => {
    await page.goto(REACT_APP_URL);
    await page.waitForLoadState('networkidle');

    const searchQuery = 'seattle';
    await page.getByRole('textbox').fill(searchQuery);
    await page.getByRole('button', { name: /explore/i }).click();
    await expect(page.getByRole('img')).toBeVisible();
  });

  test('As a user, I want clear messages if something goes wrong so I know if I need to make any changes or try again in a different manner.', async ({ page }) => {
    await page.goto(REACT_APP_URL);
    await page.waitForLoadState('networkidle');

    await expect(page.getByText(/Error/)).not.toBeVisible();

    await page.getByRole('button', { name: /explore/i }).click();
    await expect(page.getByText(/error/i)).toBeVisible();
  });
});
