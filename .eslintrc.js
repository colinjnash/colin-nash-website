module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd": true,
        "node":true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:import/warnings"],
     "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
        "no-fallthrough": 0,             // http://eslint.org/docs/rules/no-fallthrough
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};