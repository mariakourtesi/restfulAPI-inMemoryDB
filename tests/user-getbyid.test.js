'use strict';

const mongoose = require('mongoose');

const dbHandler = require('../database/db');
const userService = require('../services/user');
const userModel = require('../models/user');

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => {
    await dbHandler.connect();
});

/**
 * Seed the database.
 */
beforeEach(async () => {
    await createuser();
});

/**
 * Clear all test data after every test.
 */
afterEach(async () => {
    await dbHandler.clearDatabase();
});

/**
 * Remove and close the db and server.
 */
afterAll(async () => {
    await dbHandler.closeDatabase();
});

/**
 * user getById test suite.
 */
describe('user getById ', () => {
    /**
     * Should return null if getById doesn't find any user with the provided id.
     */
    it('should return null if nothing is found', async () => {
        await expect(userService.getById(mongoose.Types.ObjectId()))
            .resolves
            .toBeNull();
    });

    /**
     * Should return the correct user if getById finds the user with the provided id.
     */
    it('should retrieve correct user if id matches', async () => {
        const founduser = await userService.getById(userId);
        console.log(founduser);
        expect(founduser.name).toBe(user.name);
        expect(founduser.email).toBe(user.email);
    });
});

/**
 * Seed the database with user.
 */
const createuser = async () => {
    const createduser = await userModel.create(user);
    userId = createduser._id;
};

let userId;

const user = {
    name: 'Marianna',
    email: 'marianna@test.com',
    description: 'A law student'
};