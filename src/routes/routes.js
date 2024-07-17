const { Router } = require('express');

const courseRoutes = require('./course.routes');
const teacherRoutes = require('./teacher.routes');

const routes = Router();

routes.use(courseRoutes);
routes.use(teacherRoutes);

module.exports = routes;