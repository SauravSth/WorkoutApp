const getExercise = "SELECT * FROM exercise";
const getExerciseById = "SELECT * FROM exercise WHERE id = $1";
const insertExercise =
	"INSERT INTO exercise (exercise_name, exercise_description, target) VALUES ($1, $2, $3)";
const updateExercise =
	"UPDATE exercise SET exercise_name=$1, exercise_description=$2 target=$3 WHERE id=$4";
const deleteExerciseById = "DELETE FROM exercise WHERE id = $1";

module.exports = {
	getExercise,
	getExerciseById,
	deleteExerciseById,
	insertExercise,
	updateExercise,
};
