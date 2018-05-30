# fastify-dns-prefetch-control

[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

Fastify plugin to set X-DNS-Prefetch-Control header

## Why?

You may know [dns-prefetch-control](https://github.com/helmetjs/dns-prefetch-control) as a [dns-prefetch-control middleware](https://helmetjs.github.io/docs/dns-prefetch-control/) used in [helmet](https://github.com/helmetjs/helmet). And you could use it as a middleware in fastify also. So why i made this plugin?

Benchmark with no plugin:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 32.37   8.9     1139.09
Req/Sec      30444   1051.31 31048
Bytes/Sec    4.53 MB 170 kB  4.63 MB

609k requests in 20s, 90.7 MB read
```

Benchmark with dns-prefetch-control as middleware:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 30.76   201.01  9993.16
Req/Sec      26705.6 1651.31 27538
Bytes/Sec    4.77 MB 302 kB  4.9 MB

534k requests in 20s, 95.1 MB read
```

Benchmark with this plugin:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev  Max
Latency (ms) 34.61   8.45   366.66
Req/Sec      28504.8 1119.9 29249
Bytes/Sec    5.03 MB 187 kB 5.21 MB

570k requests in 20s, 101 MB read
```

So that's the reason and wish you like it. :)

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

- 0.1.0: Init version

## Todo

- Add test case
- Add ci
- Add benchmark scripts

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
