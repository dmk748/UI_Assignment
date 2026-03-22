import { APIRequestContext } from '@playwright/test';
import { ENDPOINTS } from '../endpoints';

export class UserClient {
  constructor(private request: APIRequestContext) {}

  async createUser(payload: any) {
    return await this.request.post(ENDPOINTS.CREATE_USER, { data: payload });
  }

  async getUser(userId: string) {
    return await this.request.get(`${ENDPOINTS.GET_USER}/${userId}`);
  }

  async updateUser(userId: string, payload: any) {
    return await this.request.put(`${ENDPOINTS.UPDATE_USER}/${userId}`, {
      data: payload
    });
  }
}