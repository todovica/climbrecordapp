const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/authenticate', authenticate);
router.post('/addUser', addUser);
router.get('/', getAll);
router.get('/getRutes', getRutesForUser);
router.post('/addRute', addRuteForUser);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function addUser(req, res, next) {
    userService.addUser(req.body)
        .then(user => res.json(user))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getRutesForUser(req, res, next) {
    userService.getRutesForUser(req.body)
        .then(user => res.json(user))
        .catch(err => next(err));
}

function addRuteForUser(req, res, next) {
    console.log(req)
    userService.addRuteForUser(req.body)
        .then(user => res.json(user))
        .catch(err => next(err));
}
