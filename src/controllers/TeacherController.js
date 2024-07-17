const Course = require('../models/Course');
const Teacher = require('../models/Teacher');
const { Op } = require('sequelize');

const regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

class TeacherController {
    async create(req, res) {
        try {
            const { name, email, age, course } = req.body;

            if (!name || !email || !age) {
                return res.status(400).json({ 
                    error: true, 
                    message: 'Missing required data' 
                });
            }

            if (!regexEmail.test(email)) {
                return res.status(400).json({ 
                    error: true,
                    mensage: 'The email is not in an invalid format' 
                });
            }

            const courseExists = await Course.findByPk(course);

            if (!courseExists) {
                return res.status(400).json({ 
                    error: true, 
                    message: 'Course not found' 
                });
            }
           
            const teacher = await Teacher.create({ name, email, age, course });

            return res.status(201).json({
                error: false,
                teacher
            });

        } catch (err) {
            console.log('Error creating teacher', err);
            return res.status(500).json({
                error: true,
                message: 'Error: Teacher not created!',
                err: err.message
            });
        }
    }

    async index(req, res) {
        try {
            const { name, email, age, course } = req.query;
            let query = {};

            if (name) {
                query.name = {
                    [Op.iLike]: `%${name}%`
                };
            }

            if (email) {
                query.email = {
                    [Op.iLike]: `%${email}%`
                };
            }

            if (age) {
                query.age = age;
            }

            if (course) {
                query.course = {
                    [Op.iLike]: `%${course}%`
                };
            }

            const teachers = await Teacher.findAll({ where: query });

            if (teachers.length === 0) {
                return res.status(404).json({
                    error: true, 
                    message: 'Teachers not found' 
                });
            }

            return res.status(200).json({
                error: false,
                teachers
            });

        } catch (err) {
            console.log(err);
            return res.status(500).json({
                error: true,
                message: 'Teachers not found!'
            });
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const teacher = await Teacher.findByPk(id);

            if (!teacher) {
                return res.status(404).json({ 
                    error: true, 
                    message: 'Teacher not found' 
                });
            }

            return res.status(200).json({
                error: false,
                teacher
            });

        } catch (err) {
            console.log('Error  ',err);
            return res.status(500).json({
                error: true,
                message: 'Error: Teacher not found!'
            });
        }
    }

    async update(req, res) {
        try {
        const { id } = req.params;
        const data = req.body;

        if (data.course) {
            const courseExists = await Course.findByPk(data.course);

            if (!courseExists) {
                return res.status(400).json({ 
                    error: true, 
                    message: 'Course not found' 
                });
            }
        }

        const teacher = await Teacher.findByPk(id);

        if (!teacher) {
            return res.status(404).json({ 
                error: true, 
                message: 'Teacher not found' 
            });
        }

        await teacher.update(data);

        return res.status(200).json({
            error: false, 
            teacher
        });
        } catch (err) {
            console.error('Error updating teacher', err);
            return res.status(500).json({ 
                error: true, 
                message: 'Error updating teacher' 
            });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const teacher = await Teacher.findByPk(id);

            if (!teacher) {
                return res.status(404).json({ 
                    error: true, 
                    message: 'Teacher not found' 
                });
            }

            await teacher.destroy();

            return res.status(204).send();

        } catch (err) {
            console.error('Error deleting teacher', err);
            return res.status(500).json({ 
                error: true, 
                message: 'Error deleting teacher' 
            });
        }
    }
}

module.exports = new TeacherController;