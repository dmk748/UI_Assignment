import { test, expect } from '../fixtures/ApiTestFixture';
import { userData } from '../../src/data/TestData';

test('Validate User API actions', async ({ userClient }) => {
  let userId: string;

  await test.step('Create a user, validate the response http status code & Fetch and store userId.', async () => {
    const response = await userClient.createUser(userData.createUser);

    expect(response.status()).toBe(201);

    const body = await response.json();
    userId = body.id;

    expect(body.name).toBe(userData.createUser.name);
  });

  await test.step('Get the created user details', async () => {
    const response = await userClient.getUser('2');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.id).toBe(2);
  });

  await test.step('Update user name', async () => {
    const response = await userClient.updateUser(userId, userData.updateUser);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.name).toBe(userData.updateUser.name);
  });
});