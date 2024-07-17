const { Router } = require('express');

const TeacherController = require('../controllers/TeacherController');

const teacherRoutes = Router();

teacherRoutes.post('/teachers', TeacherController.create);
teacherRoutes.get('/teachers', TeacherController.index);
teacherRoutes.get('/teachers/:id', TeacherController.show);
teacherRoutes.put('/teachers/:id', TeacherController.update);
teacherRoutes.delete('/teachers/:id', TeacherController.delete);

module.exports = teacherRoutes;