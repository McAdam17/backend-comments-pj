const router = require('express').Router();
const routesV1 = require('./v1');

router.use('/v1',routesV1);

module.exports = router;