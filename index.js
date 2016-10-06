/*!
 * is-match-ip <https://github.com/tunnckoCore/is-match-ip>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var ipFilter = require('ip-filter')

module.exports = function isMatchIp (patterns, options) {
  return function (val) {
    return !(ipFilter(val, patterns, options) === null)
  }
}
