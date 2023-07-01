// puppeteer.config.js

const os = require('os');
const path = require('path');

module.exports = {
  launch: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      `--disk-cache-dir=${path.join(os.homedir(), '.cache', 'puppeteer')}`, // Set the cache directory
    ],
  },
  browserContext: 'default',
};
