const express = require('express');
const router = express.Router();
const { getPageConfig, updatePageConfig } = require('../controllers/configController');

// GET /api/config - Get page configurations
router.get('/', getPageConfig);

// POST /api/config - Update page configurations
router.post('/', updatePageConfig);

module.exports = router;
