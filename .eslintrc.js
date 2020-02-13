module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid" : "off",
    "linebreak-style": 0,
    "no-console": "off",
    "react/prop-types" : "off",
    "react/destructuring-assignment" : "off",
  },
};
