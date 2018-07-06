import test from 'ava';
import fastify from 'fastify';
import plugin from '../src/index';

test.beforeEach(t => {
	const app = fastify();

	app.get('/', (request, reply) => {
		reply.send('hello world');
	});

	t.context.app = app;
});

const mock = async (t, opts, expected) => {
	const rsp = await t.context.app.register(plugin, opts).inject({
		method: 'get',
		url: '/'
	});
	const header = rsp.headers['x-dns-prefetch-control'];

	t.is(header, expected);
};

test('sets the header to "off" by default', async t => {
	await mock(t, {}, 'off');
});

test('can set header to "off" with configuration', async t => {
	await mock(t, { allow: false }, 'off');
});

test('can set header to "on" with configuration', async t => {
	await mock(t, { allow: true }, 'on');
});
