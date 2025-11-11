// utils/reportHelper.js
export function logResponse(response, body) {
  console.log(`[${response.status()}] ${response.url()}`);
  console.log('Response Body:', body);
}
