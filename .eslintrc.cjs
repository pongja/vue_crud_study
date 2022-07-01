/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  parserOptions: {
    ecmaVersion: '2022', // 최신 문법 지원
    sourceType: 'module', // 모듈 시스템 사용시
  },
  rules: {
    // indent: ['error', 2], 누구는 eslint-config-prettier 충돌을 막는다는데
    // indent의 경우는 그냥 rule를 꺼버리는게 나아요.
    // 계속 충돌되요 fix eslint <-> fix prettier
    // extends에서 적용한 룰셋을 덮어씌울 수 있습니다.
    // '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': [
      //포매팅을 해줄 prettier 설정파일을 만듭니다.
      'error',
      {
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
  },
};
