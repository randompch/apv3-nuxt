module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: false
    }
  },
  env: {
    es6: true
  },
  extends: [
    '@nuxtjs'
  ],
  rules: {
    'vue/max-attributes-per-line': 'off', // I don't want my html tag directives to take 20 lines...
    'vue/singleline-html-element-content-newline': 'off', // I sometimes prefer to write a few tags on the same line (e.g. svgs in link)
    'vue/attribute-hyphenation': 'off', // Just a habit, no big deal
    'no-return-assign': 'off', // Let me assign values in my returns ffs
    'curly': ['error', 'multi-or-nest'],
    'comma-dangle': ['error', 'always-multiline'], // To avoid committing a new line for a comma when adding an key/value pair to a mutliline object or array
    'camelcase': 'off', // Just a habit again
    'no-console': 'off', // Let me console.log whatever I want :3
    'vue/no-v-html': 'off' // I know it can lead to XSS attack but we've got no other choice, plus the user has no easy access to the data populated in these v-html directives.
  },
  overrides: [
    {
      files: ['*.ts', '*.vue', '*.js'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }] // Prevent eslint-loader from declaring interfaces as unused vars
      }
    }
  ]
}