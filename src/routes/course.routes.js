const { Router } = require('express');
const CourseController = require('../controllers/CourseController');

const courseRoutes = Router();

courseRoutes.post('/courses', CourseController.create);

module.exports = courseRoutes;