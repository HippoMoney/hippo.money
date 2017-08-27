module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'eslint-plugin-jsx-a11y', 'import'],
  globals: {
    window: true,
    document: true,
    requestAnimationFrame: true,
  },
  rules: {
    'no-mixed-operators': 0,
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'no-restricted-properties': 0,
    'jsx-a11y/href-no-hash': 0,
    'no-plusplus': 0,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/media-has-caption': 0,
  },
};
