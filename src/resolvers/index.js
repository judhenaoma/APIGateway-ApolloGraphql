const userResolver = require('./user_resolver');
const reviewResolver = require('./review_resolver');
const inmuebleResolver = require('./inmueble_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(userResolver, inmuebleResolver, reviewResolver);

module.exports = resolvers;