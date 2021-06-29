const User = require('../models/user');

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request because in model we required the name
    if(!req.body.name) {
        return res.status(400).send({
            message: "Please enter a name."
        });
    }

    // Create a user
    const user = new User({
        name: req.body.name,
        email: req.body.email
    });

    // Save User
    user.save()
        .then(oUser => {
            res.send(oUser);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

// Get all and return all Users.
exports.getAll = (req, res) => {
    User.find()
        .then(oUser => {
            res.send(oUser);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving the users."
        });
    });
};

// Get a single user with a userId
exports.getById = (req, res) => {
    User.findById(req.params.userId)
        .then(oUser => {
            if(oUser) {
                res.send(oUser);
            }
            return res.status(404).send({
                message: "User not exist with id " + req.params.userId
            });
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not exist with id " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Some error occurred while retrieving the user with userId " + req.params.userId
        });
    });
};

// Update a user by the userId
exports.update = (req, res) => {
    // Validate Request because name is required
    if(!req.body.name) {
        return res.status(400).send({
            message: "Please enter name."
        });
    }

    // Find user and update it
    User.findByIdAndUpdate(req.params.userId, {
        name: req.body.name,
        email: req.body.email
    }, {new: true})
        .then(oUser => {
            if(oUser) {
                res.send(oUser);
            }
            return res.status(404).send({
                message: "User does not exist with userId " + req.params.userId
            });

        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User does not exist with userId " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Some error occurred while updating the user with userId" + req.params.userId
        });
    });
};

// Delete the User with the userId
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then(oUser => {
            if(oUser) {
                res.send({message: "User has been deleted successfully!"});
            }
            return res.status(404).send({
                message: "User not exist with userId" + req.params.userId
            });
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not exist with userId" + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Some error occurred while deleting the user with userId" + req.params.userId
        });
    });
};