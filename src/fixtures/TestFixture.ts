import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BookstorePage } from '../pages/BookstorePage';
import { APIHelper } from '../../src/utils/api/apiHelper';
import { UserClient } from '../../src/api/clients/userClient';

type AppFixtures = {
  loginPage: LoginPage;
  bookstorePage: BookstorePage;
  apiHelper: APIHelper;
  userClient: UserClient;
};

export const test = base.extend<AppFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  bookstorePage: async ({ page }, use) => {
    await use(new BookstorePage(page));
  },
  apiHelper: async ({ }, use) => {
    const apiHelper = new APIHelper();
    await apiHelper.init();
    await use(apiHelper);
  },
  userClient: async ({ apiHelper }, use) => {
    await use(new UserClient(apiHelper));
  }

});

export { expect } from '@playwright/test';