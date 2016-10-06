# [is-match-ip][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Matching IPs using [micromatch][] and [ip-filter][] - glob patterns, RegExp, string or array of globs. Returns matcher function.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install

```
npm i is-match-ip --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const isMatchIp = require('is-match-ip')
```

### [isMatchIp](index.js#L39)
> Create a `matcher` function from `patterns` to validate against some `ip`. There's also `options.strict` which is `true` by default. If you make it `false` it will work as [is-match][].

**Params**

* `patterns` **{String|Array|RegExp}**: string, regex, array of globs    
* `options` **{Object}**: all options are passed to [is-match][] and [micromatch][]    
* `returns` **{Function}** `matcher`: which accept string value  

**Example**

```js
var ipMatch = require('is-match-ip')
var isMatch = ipMatch([
  '142.???.31.5*',
  '123.222.3*.55',
  '!142.*.??.55'
])

console.log(isMatch('123.222.33.55')) // => true
console.log(isMatch('142.111.31.51')) // => true
console.log(isMatch('142.2.33.55')) // => false
```

## Related
- [ip-filter](https://www.npmjs.com/package/ip-filter): Filters valid IPv4 or IPv6 against glob pattern, array, string and etc… [more](https://github.com/tunnckocore/ip-filter#readme) | [homepage](https://github.com/tunnckocore/ip-filter#readme "Filters valid IPv4 or IPv6 against glob pattern, array, string and etc. If match returns passed `ip`, otherwise null is returned. Have no strict mode to check no IP values.")
- [is-match](https://www.npmjs.com/package/is-match): Create a matching function from a glob pattern, regex, string, array, object… [more](https://github.com/jonschlinkert/is-match) | [homepage](https://github.com/jonschlinkert/is-match "Create a matching function from a glob pattern, regex, string, array, object or function.")
- [koa-better-body](https://www.npmjs.com/package/koa-better-body): Full-featured [koa][] body parser! Support parsing text, buffer, json, json patch, json… [more](https://github.com/tunnckocore/koa-better-body#readme) | [homepage](https://github.com/tunnckocore/koa-better-body#readme "Full-featured [koa][] body parser! Support parsing text, buffer, json, json patch, json api, csp-report, multipart, form and urlencoded bodies. Works for koa@1, koa@2 and will work for koa@3.")
- [koa-ip-filter](https://www.npmjs.com/package/koa-ip-filter): koa middleware to filter request IPs or custom ID with glob patterns… [more](https://github.com/tunnckocore/koa-ip-filter#readme) | [homepage](https://github.com/tunnckocore/koa-ip-filter#readme "koa middleware to filter request IPs or custom ID with glob patterns, array, string, regexp or matcher function. Support custom `403 Forbidden` message and custom ID.")
- [micromatch](https://www.npmjs.com/package/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch… [more](https://github.com/jonschlinkert/micromatch) | [homepage](https://github.com/jonschlinkert/micromatch "Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-match-ip/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[ip-filter]: https://github.com/tunnckocore/ip-filter
[is-match]: https://github.com/jonschlinkert/is-match
[koa]: https://github.com/koajs/koa
[micromatch]: https://github.com/jonschlinkert/micromatch

[npmjs-url]: https://www.npmjs.com/package/is-match-ip
[npmjs-img]: https://img.shields.io/npm/v/is-match-ip.svg?label=is-match-ip

[license-url]: https://github.com/tunnckoCore/is-match-ip/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/is-match-ip.svg

[downloads-url]: https://www.npmjs.com/package/is-match-ip
[downloads-img]: https://img.shields.io/npm/dm/is-match-ip.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-match-ip
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-match-ip.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-match-ip
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-match-ip/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-match-ip
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-match-ip.svg

[david-url]: https://david-dm.org/tunnckoCore/is-match-ip
[david-img]: https://img.shields.io/david/tunnckoCore/is-match-ip.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

