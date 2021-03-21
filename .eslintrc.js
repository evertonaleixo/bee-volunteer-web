{
  "env": {
    "browser": true,
      "es2021": true,
        "node": true,
          "jest": true
  },
  "extends": [
    "plugin:react/recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier/standard",
    "prettier/react"
  ],
    "parser": "@typescript-eslint/parser",
      "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "prettier"
  ],
    "rules": {
    "prettier/prettier": "error",
      "space-before-function-paren": "off",
        "react/prop-types": "off"
  }
}