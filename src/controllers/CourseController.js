const Course = require('../models/Course');

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
}

module.exports = new CourseController;