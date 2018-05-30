const fp = require('fastify-plugin');

const dnsPrefetchControl = (app, opts = {}, next) => {
	const header = opts.allow ? 'on' : 'off';

	app.addHook('onSend', (request, reply, payload, next) => {
		reply.header('X-DNS-Prefetch-Control', header);
		next();
	});

	next();
};

module.exports = fp(dnsPrefetchControl, {
	fastify: '^1.0.0',
	name: 'fastify-dns-prefetch-control'
});
