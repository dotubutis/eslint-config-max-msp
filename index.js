const globals = require('./lib/globals')
const rules = require('./lib/rules')

module.exports = {
  extends: ['eslint:recommended'],
  globals,
  parserOptions: {
    ecmaVersion: 3
  }
}
