/*
=============================================================================
Copyright 2022 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

/**
  build: Changes that affect the build system or external dependencies (example scopes: pnpm, npm)
  ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
  docs: Documentation only changes
  feat: A new feature
  fix: A bug fix
  perf: A code change that improves performance
  ref: A code change that neither fixes a bug nor adds a feature
  style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc..)
  test: Adding missing tests or correcting existing tests
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'ref',
        'style',
        'test',
        'translation',
        'security',
        'changeset',
        'revert',
        'chore',
      ],
    ],
  },
};
