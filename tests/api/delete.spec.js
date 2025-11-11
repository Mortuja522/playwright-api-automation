import { test, expect, request } from '@playwright/test';
import { BASE_URL } from '../../utils/apiHelper.js';
import { logResponse } from '../../utils/reportHelper.js';

test.describe('DELETE API Tests', () => {
  test('Delete an object', async () => {
    const context = await request.newContext();
    const objectId = 'ff8081819782e69e019a7337526d326f'; // put or post response ID here

    const response = await context.delete(`${BASE_URL}/${objectId}`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    logResponse(response, body);
  });
});
