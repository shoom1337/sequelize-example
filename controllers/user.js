const User = require("../models").User;

module.exports = {
  index(req, res) {
    return User.findAll()
      .then((users) => res.status(201).send(users))
      .catch((error) => res.status(400).send(error));
  },
  create(req, res) {
    return User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },
};
