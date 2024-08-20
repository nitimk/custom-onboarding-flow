const PageConfig = require('../models/PageConfig');

// Fetch the current page configurations
const getPageConfig = async (req, res) => {
  try {
    const config = await PageConfig.findAll();
    const configData = {
      page2: config.find(c => c.pageNumber === 2).component,
      page3: config.find(c => c.pageNumber === 3).component,
    };
    res.status(200).json(configData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update page configurations
const updatePageConfig = async (req, res) => {
  try {
    const { page2, page3 } = req.body;

    await PageConfig.update({ component: page2 }, { where: { pageNumber: 2 } });
    await PageConfig.update({ component: page3 }, { where: { pageNumber: 3 } });

    res.status(200).json({ message: "Configuration updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getPageConfig, updatePageConfig };
