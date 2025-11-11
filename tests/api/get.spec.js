import { test, expect, request } from '@playwright/test';
import { BASE_URL } from '../../utils/apiHelper.js';

test.describe('GET API Tests', () => {
  test('Fetch all objects', async () => {
    const context = await request.newContext();
    const response = await context.get(BASE_URL);

    expect(response.status()).toBe(200);

    const data = await response.json();
    console.log('Total objects:', data.length,data);
  });
});
