module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "parserOptions": {"ecmaVersion": 2017},
    "plugins": ["node"],
    "extends": ["eslint:recommended", "plugin:node/recommended"],
    "rules": {
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "node/exports-style": ["error", "module.exports"],
        "strict": ["error", "safe"],
        "no-console":["off"]
    }
};