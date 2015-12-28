import _ from 'lodash';

import {
    RuleTester
} from 'eslint';

import {
    rules
} from './../../src/';

let ruleTester;

ruleTester = new RuleTester();

_.forEach([
    'check-param-names',
    'check-tag-names',
    'check-types',
    'newline-after-description',
    'require-hyphen-before-description',
    'require-param',
    'require-param-description',
    'require-param-type',
    'require-returns-description',
    'require-returns-type'
], (ruleName) => {
    ruleTester.run(ruleName, rules[ruleName], require('./assertions/' + _.camelCase(ruleName)));
});
