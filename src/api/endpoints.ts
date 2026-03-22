export const ENDPOINTS = {
  CREATE_USER: '/users',
  GET_USER: (userId: string) => `/users/${userId}`,
  UPDATE_USER: (userId: string) => `/users/${userId}`,
};