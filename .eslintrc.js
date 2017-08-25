module.exports = {
  "extends": [ "standard", "plugin:react/recommended", "standard-preact" ],
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "amd": true,
    "webextensions": true
  }
};
