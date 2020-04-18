// load up SQL files as pg-promise QueryFiles

const { QueryFile } = require('pg-promise');
const { resolve } = require('path');

// func to load an external SQL Query file
function loadSql(file) {
  const fullPath = resolve(__dirname, file);
  return new QueryFile(fullPath, {
    minify: true,
  });
}

module.exports = {
  users: {
    getAll: loadSql('./sql/users/get-all.sql'),
  },
};
