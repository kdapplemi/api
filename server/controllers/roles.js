const Roles = require('../models').Roles;

module.exports = {
    create(req, res) {
        return Roles
            .create({
                roleName: req.body.roleName,
                isValid: req.body.isValid,
                userId: req.params.userId,
            })
            .then(roles => res.status(201).send(roles))
            .catch(error => res.status(400).send(error));
    },
};