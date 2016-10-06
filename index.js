/*!
 * is-match-ip <https://github.com/tunnckoCore/is-match-ip>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var ipFilter = require('ip-filter')

/**
 * > Create a `matcher` function from `patterns`
 * to validate against some `ip`. There's also
 * `options.strict` which is `true` by default.
 * If you make it `false` it will work as [is-match][].
 *
 * **Example**
 *
 * ```js
 * var ipMatch = require('is-match-ip')
 * var isMatch = ipMatch([
 *   '142.???.31.5*',
 *   '123.222.3*.55',
 *   '!142.*.??.55'
 * ])
 *
 * console.log(isMatch('123.222.33.55')) // => true
 * console.log(isMatch('142.111.31.51')) // => true
 * console.log(isMatch('142.2.33.55')) // => false
 * ```
 *
 * @param  {String|Array|RegExp} `patterns` string, regex, array of globs
 * @param  {Object} `options` all options are passed to [is-match][] and [micromatch][]
 * @return {Function} `matcher` which accept string value
 * @api public
 */

module.exports = function isMatchIp (patterns, options) {
  return function (val) {
    return !(ipFilter(val, patterns, options) === null)
  }
}
