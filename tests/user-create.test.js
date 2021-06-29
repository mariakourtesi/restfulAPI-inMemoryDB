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
 * user create test suite.
 */
describe('user create', () => {
    /**
     * Tests that a valid user can be created through the userService without throwing any errors.
     */
    it('can be created correctly', async () => {
        expect(async () => {
            await userService.create(userComplete);
        })
            .not
            .toThrow();
    });

    /**
     * Tests that a user can be created without a description.
     */
    it('can be created without description', async () => {
        expect(async () => {
            await userService.create(userMissingDescription);
        })
            .not
            .toThrow();
    });

    /**
     * user should exist after being created.
     */
    it('exists after being created', async () => {
        await userService.create(userComplete);

        const createduser = await userModel.findOne();

        expect(createduser.name)
            .toBe(userComplete.name);
    });

    /**
     * Should throw an error when user doesn't have a name or email.
     */
    it('requires name', async () => {
        await expect(userService.create(userMissingName))
            .rejects
            .toThrow(mongoose.Error.ValidationError);
    });
    it('requires name', async () => {
        await expect(userService.create(userMissingEmail))
            .rejects
            .toThrow(mongoose.Error.ValidationError);
    });
});

const userComplete = {
    name: 'Maria',
    email: 'maria@test.com',
    description: 'A new student in Arts and Design'
};

const userMissingDescription = {
    name: 'Hellen',
    email: 'hellen@test.com'
};

const userMissingName = {
    email: 'John@test.com',
    description: 'A Maths student'
};

const userMissingEmail = {
    name: 'Jasper',
    description: 'A Computer Science student'
};