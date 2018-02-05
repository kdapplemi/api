const Users = require('../models').Users;
const Roles = require('../models').Roles;

module.exports = {
    create(req, res) {
        return Users
            .create({
                name: req.body.name,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },



    list(req, res) {
        return Users
            .findAll({
                include: [{
                    model: Roles,
                    as: 'userRoles',
                }],
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    },
};