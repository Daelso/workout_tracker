const db = require('../models');
const router = require("express").Router();


// GET Request for getting all workouts
router.get("/api/workouts", async(req, res) => {
	db.Workout.find()
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// GET request for the stats page.
router.get("/api/workouts/range", (req, res) => {
	db.Workout.find()
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});





// Export HTML routes
module.exports = router;