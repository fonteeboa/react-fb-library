const path = require('path');

module.exports = {
    process(sourceText, sourcePath, options) {
      const processedCode = `module.exports = ${JSON.stringify(path.basename(sourcePath))};`;
      return {
        code: processedCode,
      };
    },
};