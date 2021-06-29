module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new User
    app.post('/users', users.create);

    // Get all Users
    app.get('/users', users.getAll);

    // Get a single User with userId
    app.get('/users/:userId', users.getById);

    // Update a User with userId
    app.put('/users/:userId', users.update);

    // Delete a User with userId
    app.delete('/users/:userId', users.delete);
}