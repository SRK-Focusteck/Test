module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ["only-warn"],
  rules: {
    // "no-console": "off",
    "no-console": "error",
    "no-unused-vars": "warn",
    semi: ["error", "always"],
    quotes: ["error", "double"],
    // quotes: ["warn", "single"],
    // quotes: ["off", "single"],
  },
};
