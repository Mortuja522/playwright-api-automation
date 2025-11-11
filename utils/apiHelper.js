// utils/apiHelper.js
export const BASE_URL = 'https://api.restful-api.dev/objects';

export async function createObject(context, data) {
  const response = await context.post(BASE_URL, { data });
  return response;
}

export async function updateObject(context, id, data) {
  const response = await context.put(`${BASE_URL}/${id}`, { data });
  return response;
}

export async function deleteObject(context, id) {
  const response = await context.delete(`${BASE_URL}/${id}`);
  return response;
}
