Privacy policies.

Setup eslint 

```bash
npm install --save-dev eslint-config-prettier eslint-plugin-prettier prettier
```
Add the following configs to `package.json`

```
"eslintConfig": {
    "extends": [
      "react-app",
      "plugin:prettier/recommended"
    ]
  },
"prettier": {
    "printWidth": 90,
    "bracketSpacing": true,
    "trailingComma": "es5",
    "semi": false,
    "singleQuote": true
  },
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "lint:fix": "eslint src/**/*.js --fix",
    "lint": "eslint src/**/*.js",
    "prettify": "prettier src/**/*.js --write"
  },
``` 

Run `npm install --save-dev husky lint-staged`

add to package.json

```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": "npm run lint:fix"
  },
```


Resource:
https://dev.to/eclecticcoding/linting-in-react-5c17
