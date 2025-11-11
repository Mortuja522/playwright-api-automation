import { test, expect, request } from '@playwright/test';
import { BASE_URL } from '../../utils/apiHelper.js';
import data from '../../data/testData.json' assert { type: 'json' };
import { logResponse } from '../../utils/reportHelper.js';

test.describe('PUT API Tests', () => {
  test('Update existing object', async () => {
    const context = await request.newContext();
    const objectId = 'ff8081819782e69e019a7337526d326f'; //  POST response ID insert here 

    const response = await context.put(`${BASE_URL}/${objectId}`, { data: data.updateObject });
    expect(response.status()).toBe(200);

    const body = await response.json();
    logResponse(response, body);
    expect(body.name).toBe(data.updateObject.name);
  });
});
