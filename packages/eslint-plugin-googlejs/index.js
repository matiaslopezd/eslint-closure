'use strict';

/** @const {!ESLint.Config} */
exports = {
  /** @const {Object} */
  rules: {
    'inline-comment-spacing': require('./lib/rules/inline-comment-spacing'),
    'camelcase': require('./lib/rules/camelcase'),
  },
  configs: {},
};
