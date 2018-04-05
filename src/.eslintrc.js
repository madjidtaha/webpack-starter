module.exports = {
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "es6": true
    },
    // "parserOptions": {
    //     "sourceType": "module"
    // },
    "globals": {},
    "rules": {
        "semi": [ "error", "always" ],
        "no-console": 0

        // "strict": 0,
        // "indent": [
        //     "error",
        //     4
        // ],
        // "linebreak-style": [
        //     "error",
        //     "unix"
        // ],
        // "quotes": [
        //     "error",
        //     "single"
        // ],
        // "no-labels": [2, { "allowLoop": false, "allowSwitch": false }],
        // "no-unused-vars": 0,
        // "no-new": 0,
        // "no-new-func": 0,
        // "no-param-reassign": ["error", { "props": false }],
        // "padded-blocks": 0,
        // "id-length": 0,
        // "arrow-body-style": [2, "as-needed"],
        // "import/no-extraneous-dependencies": 0,
        // "import/extensions": 0,
        // "import/no-unresolved": 0
    }
};