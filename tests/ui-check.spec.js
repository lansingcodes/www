import { test, expect } from '@playwright/test';

test('Check Lansing Codes homepage UI', async ({ page }) => {
  // Go to the homepage
  await page.goto('http://localhost:3001');

  // Wait for page to load
  await page.waitForLoadState('networkidle');

  // Take a full page screenshot
  await page.screenshot({
    path: 'homepage-full.png',
    fullPage: true
  });

  // Check for main heading
  const heading = page.getByRole('heading', { name: 'Lansing Codes', level: 1 });
  await expect(heading).toBeVisible();

  // Check for navigation links
  const slackLink = page.getByRole('link', { name: /slack/i });
  const eventsLink = page.getByRole('link', { name: /events/i });
  const groupsLink = page.getByRole('link', { name: /groups/i });
  const resourcesLink = page.getByRole('link', { name: /resources/i });
  const sponsorsLink = page.getByRole('link', { name: /sponsors/i });
  const newsletterLink = page.getByRole('link', { name: /newsletter/i });

  await expect(slackLink).toBeVisible();
  await expect(eventsLink).toBeVisible();
  await expect(groupsLink).toBeVisible();
  await expect(resourcesLink).toBeVisible();
  await expect(sponsorsLink).toBeVisible();
  await expect(newsletterLink).toBeVisible();

  // Check for sections
  await expect(page.locator('#events')).toBeInViewport();
  await expect(page.locator('#meetups')).toBeVisible();
  await expect(page.locator('#sponsors')).toBeVisible();

  // Log any console errors
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  // Check for JavaScript errors
  page.on('pageerror', error => {
    console.log('Page Error:', error.message);
  });

  // Output console errors if any
  if (errors.length > 0) {
    console.log('Console Errors:', errors);
  }

  // Check if FontAwesome icons are loading
  const icons = await page.locator('svg[data-icon]').count();
  console.log(`Found ${icons} FontAwesome icons`);

  // Take screenshots of specific sections
  await page.locator('#welcome').screenshot({ path: 'welcome-section.png' });
  await page.locator('#meetups').screenshot({ path: 'meetups-section.png' });
  await page.locator('#sponsors').screenshot({ path: 'sponsors-section.png' });
});
