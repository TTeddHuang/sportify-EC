import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import stylistic from '@stylistic/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  {
    name: 'app/global-config',
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],

  // Airbnb-style rules
  {
    name: 'app/airbnb-style-rules',
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // Airbnb style rules
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/eol-last': 'error',
      '@stylistic/max-len': ['error', { code: 100, ignoreUrls: true }],

      // General Airbnb rules
      'no-var': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'no-debugger': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'brace-style': ['error', '1tbs'],
      camelcase: ['error', { properties: 'never' }],

      // ES6+ Airbnb rules
      'arrow-spacing': ['error', { before: true, after: true }],
      'arrow-parens': ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
      'prefer-template': 'error',
      'template-curly-spacing': ['error', 'never'],
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: { array: false, object: true },
          AssignmentExpression: { array: true, object: false },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
      'prefer-spread': 'error',
      'prefer-rest-params': 'error',
      'no-useless-constructor': 'error',
      'class-methods-use-this': 'error',
      'no-confusing-arrow': ['error', { allowParens: true }],
      'no-useless-computed-key': 'error',
      'no-useless-rename': [
        'error',
        { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
      ],
      'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
      'prefer-numeric-literals': 'error',
      'symbol-description': 'error',
      'no-restricted-exports': [
        'error',
        {
          restrictedNamedExports: ['default', 'then'],
        },
      ],

      // Additional function rules
      'func-names': ['warn', 'as-needed'],
      'func-style': ['error', 'expression'],
      'no-loop-func': 'error',
      'no-new-func': 'error',
      'space-before-blocks': 'error',
      'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

      // Object and Array rules
      'dot-notation': ['error', { allowKeywords: true }],
      'no-array-constructor': 'error',
      'no-new-object': 'error',
      'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

      // Import rules (basic)
      'no-duplicate-imports': 'error',
    },
  },

  // Vue-specific Airbnb-style rules
  {
    name: 'app/vue-airbnb-style',
    files: ['**/*.vue'],
    rules: {
      // Template formatting
      'vue/html-indent': ['error', 2],
      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'always',
        },
      ],
      'vue/html-closing-bracket-spacing': [
        'error',
        {
          startTag: 'never',
          endTag: 'never',
          selfClosingTag: 'always',
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: { max: 3 },
          multiline: { max: 1 },
        },
      ],

      // Self-closing tags
      'vue/html-self-closing': [
        'error',
        {
          html: { void: 'always', normal: 'always', component: 'always' },
          svg: 'always',
          math: 'always',
        },
      ],

      // Naming conventions
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/attribute-hyphenation': ['error', 'always'],

      // Events
      'vue/custom-event-name-casing': ['error', 'kebab-case'],

      // Directives
      'vue/v-bind-style': ['error', 'shorthand'],
      'vue/v-on-style': ['error', 'shorthand'],

      // Props and emits
      'vue/require-default-prop': 'error',
      'vue/require-prop-types': 'error',

      // Template expressions
      'vue/no-multi-spaces': 'error',
      'vue/template-curly-spacing': 'error',
    },
  },

  {
    name: 'app/vitest-config',
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  skipFormatting,
]
