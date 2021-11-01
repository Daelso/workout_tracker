const db = require('../models');
const router = require("express").Router();


// GET Request for getting all workouts
router.get("/api/workouts", async(req, res) => {
	try{
	const findAllWorkouts = await db.Workout.find()

		res.json(findAllWorkouts);
		
	}
		catch(err) {
			res.json(err);
		};
});

// GET request for the stats page.
router.get("/api/workouts/range", async (req, res) => {
try{
	const findWorkoutRange = await db.Workout.find()

			res.json(findWorkoutRange);
		}

		catch (err) {
			res.json(err);
		};
});





// Export HTML routes
module.exports = router;