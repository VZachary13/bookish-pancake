const router = require('express').Router();
const {Comment, CommentTag, User, Post} = require('../models');
const withAuth = require('../utils/auth');

router.post('/new', async (req, res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})