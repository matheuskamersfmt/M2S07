const { Router } = require('express');

const courseRoutes = require('./course.routes');

const routes = Router();

routes.use(courseRoutes);

module.exports = routes;