'use strict';
const router = require('express').Router({mergeParams: true});
const baseRouter = require('./base');
module.exports = router;

router.use('/', baseRouter);
