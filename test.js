/*!
 * is-match-ip <https://github.com/tunnckoCore/is-match-ip>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var test = require('mukla')
var ipMatch = require('./index')

test('should return matcher function', function (done) {
  var isMatch = ipMatch('123.???.55.8*')
  test.strictEqual(typeof isMatch, 'function')
  done()
})

test('should matcher function throw if `val` not a string', function (done) {
  var isMatch = ipMatch('123.???.55.8*')

  function fixture () {
    isMatch(123)
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `ip` to be a string/)
  done()
})

test('should matcher throw Error if not valid ip is given on strict mode', function (done) {
  function fixture () {
    ipMatch('222.??.21.25*')('foo.bar.baz.123')
  }
  test.throws(fixture, Error)
  test.throws(fixture, /expect only valid IPs when `opts.strict` mode/)
  done()
})

test('should matcher return `true` if match string glob pattern', function (done) {
  var actual = ipMatch('123.??.34.8*')('123.77.34.89')
  test.strictEqual(actual, true)
  done()
})

test('should matcher return `false` if NOT match string glob pattern', function (done) {
  var actual = ipMatch('123.??.34.8*')('123.222.34.88')
  test.strictEqual(actual, false)
  done()
})

test('should return `true` if match one of array glob patterns', function (done) {
  var actual1 = ipMatch(['142.*.2.*', '!123.222.*'])('142.21.2.1')
  test.strictEqual(actual1, true)

  var actual2 = ipMatch(['123.*.34.*', '!123.222.*'])('123.222.34.88')
  test.strictEqual(actual2, true)

  // notice the double glob star
  // see more "Why", on http://ghub.io/ip-filter
  var actual3 = ipMatch(['123.*.34.*', '!123.222.**'])('123.222.34.88')
  test.strictEqual(actual3, false)
  done()
})
