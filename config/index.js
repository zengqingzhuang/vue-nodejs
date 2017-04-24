process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let _ = require('lodash');
module.exports = _.merge(
	require(`${__dirname}/${process.env.NODE_ENV}`)
);