const db = require('../models');
const router = require("express").Router();


// GET Request for getting all workouts
router.get("/api/workouts", async(req, res) => {
	try{
	const findAllWorkouts = await db.Workout.find({}).sort({ date: -1}) //descending sort

		res.json(findAllWorkouts);
		
	}
		catch(err) {
			res.json(err);
		};
});

// GET request for the stats page.
router.get("/api/workouts/range", async (req, res) => {
try{
	const findWorkoutRange = await db.Workout.find({}).sort({ date: -1}) //descending sort 

			res.json(findWorkoutRange);
		}

		catch (err) {
			res.json(err);
		};
});

router.post("/api/workouts", (req, res) => {
	db.Workout.create(req.body) //create from req.body
	  .then((workout) => { //pass info through to json
		res.status(201).json(workout);
	  })
	  .catch((err) => {
		res.status(400).json(err);
	  });
  });

router.put("/api/workouts/:id", async (req, res) => {
	const id = req.params.id; //defines workout ID
	const body = req.body; //defines the req.body
	db.Workout.updateOne(
	  { _id: id }, //update by id
	  {
		$push: { //push our updated exercise into exercises array
		  exercises: { ...body },
		},
	  }
	)
	  .then((workout) => { //take this newly updated info and push it into json
		res.status(200).json(workout);
	  })
	  .catch((err) => {
		res.status(400).json(err);
	  });
  });
  


// Export HTML routes
module.exports = router;