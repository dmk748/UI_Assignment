import { test as base, request, APIRequestContext, Page } from '@playwright/test';
import { UserClient } from '../../src/api/clients/userClient';
import { ApiHelper } from '../../src/utils/api/apiHelper';
import { ENV } from '../../.env';


type Fixtures = {
  userClient: UserClient;
};

export const test = base.extend<Fixtures>({

  userClient: async ({ }, use) => {
    if (!ENV.API_BASE_URL) {
      throw new Error('API_BASE_URL is not defined in .env');
    }

    if (!ENV.API_KEY) {
      throw new Error('API_KEY is not defined in .env');
    }

    const apiHelper = new ApiHelper();
    await apiHelper.init(ENV.API_BASE_URL, {
      'x-api-key': ENV.API_KEY
    });
    const client = new UserClient(apiHelper.context);

    await use(client);
    await apiHelper.dispose();
  }

});

export const expect = test.expect;