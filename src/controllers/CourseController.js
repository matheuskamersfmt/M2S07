const Course = require('../models/Course');
const { Op } = require('sequelize');

class CourseController {
    async create(req, res) {
        try {
            const data = req.body;
            console.log(data);
            if (!data.name || !data.duration) {
                return res.status(400).json({ error: 'Missing required data' });
            }

            const course = await Course.create(data); 

            return res.status(201).json({
                error: false,
                course
            });
        } catch (err) {
            console.error('Error creating course', err);
            return res.status(500).json({ message: 'Error creating course' });
        } 
    }

    async index(req, res) {
        try {

            const { name, duration } = req.query;
            let query = {};

            if (name) {
                query.name = {
                    [Op.iLike]: `%${name}%`
                };
            }

            if (duration) {
                query.duration = duration;
            }   

            const courses = await Course.findAll({ where: query });

            if (courses?.length === 0) {
                return res.status(404).json({ message: 'No courses found' });
            }

            return res.status(200).json({
                error: false,
                courses
            });
        } catch (err) {
            console.error('Error listing courses', err);
            return res.status(500).json({ message: 'Error listing courses' });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;

            if (!data.name && !data.duration) {
                return res.status(400).json({ error: 'Missing required data' });
            }

            const course = await Course.findByPk(id);

            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }

            await course.update(data);

            return res.status(200).json({
                error: false,
                course
            });
        } catch (err) {
            console.error('Error updating course', err);
            return res.status(500).json({ message: 'Error updating course' });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;

            const course = await Course.findByPk(id);

            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }

            await course.destroy();

            return res.status(204).json();
        } catch (err) {
            console.error('Error deleting course', err);
            return res.status(500).json({ message: 'Error deleting course' });
        }
    }
}

module.exports = new CourseController;