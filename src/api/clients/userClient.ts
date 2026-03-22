import { APIHelper } from '../../utils/api/apiHelper';
import { ENDPOINTS } from '../endpoints';

export class UserClient {
    constructor(private apiHelper: APIHelper) { }

    async createUser(payload: any) {
        return await this.apiHelper.post(ENDPOINTS.CREATE_USER, payload);
    }

    async getUser(userId: string) {
        return await this.apiHelper.get(ENDPOINTS.GET_USER(userId));
    }

    async updateUser(userId: string, payload: any) {
        return await this.apiHelper.put(ENDPOINTS.UPDATE_USER(userId), payload);
    }
}

