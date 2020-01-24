const { Router } = require('express');
const DevController = require('./controllers/devController.js');
const SearchController = require('./controllers/searchController.js');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;