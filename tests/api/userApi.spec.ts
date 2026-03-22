/*
1.Create a user, validate the response http status code. Fetch and store userId.
2.Get the created user details and validate the same.
3.Update user's name, and validate the same.
*/


import { test, expect } from '../../src/fixtures/TestFixture';
import { userData } from '../../src/data/TestData';

test('Validate User API functionality: Create, Get and Update', async ({ userClient }) => {

  let userId: string;

  userId = await test.step('Create user, validate status code and capture userId', async () => {
    const response = await userClient.createUser(userData.createUser);

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body).toMatchObject({
      name: userData.createUser.name
    });

    return body.id; // store userId
  });

  await test.step('Get created user details and validate', async () => {
    const response = await userClient.getUser(userId);

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body.data.id).toBe(Number(userId));
  });

  await test.step("Update user's name and validate", async () => {
    const response = await userClient.updateUser(userId, userData.updateUser);

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body).toMatchObject({
      name: userData.updateUser.name
    });
  });

});