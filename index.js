const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const dotenvPath = path.resolve(appDirectory, '.env');

const NODE_ENV = process.env.NODE_ENV || 'development';

//
// dotenv loading extracted from create-react-app / react-scripts
//

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
const dotenvFiles = [
  `${dotenvPath}.${NODE_ENV}.local`,
  `${dotenvPath}.${NODE_ENV}`,
  // Don't include `.env.local` for `test` environment
  // since normally you expect tests to produce the same
  // results for everyone
  NODE_ENV !== 'test' && `${dotenvPath}.local`,
  dotenvPath,
].filter(Boolean);


// Load environment variables from .env* files. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.  Variable expansion is supported in .env files.
// https://github.com/motdotla/dotenv
// https://github.com/motdotla/dotenv-expand
module.exports = (preloadEnv) => {
  const files = [];
  if (preloadEnv) {
    files.push(`${dotenvPath}.${preloadEnv}`);
  }
  return files.concat(dotenvFiles).forEach((dotenvFile) => {
    if (fs.existsSync(dotenvFile)) {
      const dotenv = require('dotenv');
      const dotenvExpand = require('dotenv-expand');
      dotenvExpand.expand(
        dotenv.config({
          path: dotenvFile,
        }),
      );
    }
  });
};
