import { APIRequestContext, request } from '@playwright/test';

export class ApiHelper {
  private requestContext!: APIRequestContext;

  async init(baseURL: string, headers?: Record<string, string>) {
    this.requestContext = await request.newContext({
      baseURL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
        ...headers
      }
    });
  }

  get context() {
    return this.requestContext;
  }

  async dispose() {
    if (this.requestContext) {
      await this.requestContext.dispose();
    }
  }
}



