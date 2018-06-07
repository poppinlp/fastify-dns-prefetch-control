# fastify-dns-prefetch-control

[![Build Status][ci-img]][ci-url]
[![Code coverage][cov-img]][cov-url]
[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

Fastify plugin to set X-DNS-Prefetch-Control header

## Why?

You may know [dns-prefetch-control](https://github.com/helmetjs/dns-prefetch-control) as a [dns-prefetch-control middleware](https://helmetjs.github.io/docs/dns-prefetch-control/) used in [helmet](https://github.com/helmetjs/helmet). And you could use it as a middleware in fastify also. So why i made this plugin?

You may find the reason in [benchmark result](./benchmarks/benchmark.txt) and wish you like it. :)

## Install

Via npm:

```shell
npm i fastify-dns-prefetch-control
```

Via yarn:

```shell
yarn add fastify-dns-prefetch-control
```

## Usage

```js
const fastify = require('fastify');
const fastifyDnsPrefetchControl = require('fastify-dns-prefetch-control');

const app = fastify();
app.register(fastifyDnsPrefetchControl);

app.listen(3000, err => {
  if (err) throw err;
});
```

## Options

This plugin has the same options as the middleware in helmet.

### allow {boolean}

Set `X-DNS-Prefetch-Control` to `on` if it's a truly value and `off` for a falsely value. Default is `false`.

## Changelog

- 0.2.0
  - Add test case
  - Add code coverage
  - Add benchmarks
- 0.1.0:
  - Init version

[ci-img]: https://img.shields.io/travis/poppinlp/fastify-dns-prefetch-control.svg?style=flat-square
[ci-url]: https://travis-ci.org/poppinlp/fastify-dns-prefetch-control
[cov-img]: https://img.shields.io/coveralls/poppinlp/fastify-dns-prefetch-control.svg?style=flat-square
[cov-url]: https://coveralls.io/github/poppinlp/fastify-dns-prefetch-control?branch=master
[lint-img]: https://img.shields.io/badge/code%20style-handsome-brightgreen.svg?style=flat-square
[lint-url]: https://github.com/poppinlp/eslint-config-handsome
[dep-img]: https://img.shields.io/david/poppinlp/fastify-dns-prefetch-control.svg?style=flat-square
[dep-url]: https://david-dm.org/poppinlp/fastify-dns-prefetch-control
[dev-dep-img]: https://img.shields.io/david/dev/poppinlp/fastify-dns-prefetch-control.svg?style=flat-square
[dev-dep-url]: https://david-dm.org/poppinlp/fastify-dns-prefetch-control#info=devDependencies
[npm-ver-img]: https://img.shields.io/npm/v/fastify-dns-prefetch-control.svg?style=flat-square
[npm-dl-img]: https://img.shields.io/npm/dm/fastify-dns-prefetch-control.svg?style=flat-square
[npm-lc-img]: https://img.shields.io/npm/l/fastify-dns-prefetch-control.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/fastify-dns-prefetch-control
