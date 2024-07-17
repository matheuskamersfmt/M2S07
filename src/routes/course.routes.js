const { Router } = require('express');
const CourseController = require('../controllers/CourseController');

const courseRoutes = Router();

courseRoutes.post('/courses', CourseController.create);
courseRoutes.get('/courses', CourseController.index);
courseRoutes.put('/courses/:id', CourseController.update);
courseRoutes.delete('/courses/:id', CourseController.delete);

module.exports = courseRoutes;