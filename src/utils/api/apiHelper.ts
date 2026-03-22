import { APIRequestContext, request } from '@playwright/test';
import { ENV } from '../../config/env';


export class APIHelper {

    // Define the request context as a private member of the class
    private requestContext!: APIRequestContext;

    async init() {
        try {
            this.requestContext = await request.newContext({
                baseURL: ENV.API_BASE_URL
            });
        } catch (error) {
            console.error('Error initializing API request context:', error);
            throw error;
        }
    }

    async post(url: string, body: any) {
        try {
            return await this.requestContext.post(url, { data: body });
        } catch (error) {
            console.error(`Error in POST request to ${url}:`, error);
            throw error;
        }
    }

    async get(url: string) {
        try {
            return await this.requestContext.get(url);
        } catch (error) {
            console.error(`Error in GET request to ${url}:`, error);
            throw error;
        }
    }

    async put(url: string, body: any) {
        try {
            return await this.requestContext.put(url, { data: body });
        } catch (error) {
            console.error(`Error in PUT request to ${url}:`, error);
            throw error;
        }
    }
}

