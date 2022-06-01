const getWorkout = 'SELECT * FROM workout'
const getWorkoutById = 'SELECT * FROM workout WHERE id = $1'
const insertWorkout = 'INSERT INTO workout (name, description) VALUES ($1, $2)'
const updateWorkout = 'UPDATE workout SET name=$1, description=$2 WHERE id=$3'
const deleteWorkoutById = 'DELETE FROM workout WHERE id = $1'

module.exports = {
	getWorkout,
	getWorkoutById,
	deleteWorkoutById,
	insertWorkout,
	updateWorkout,
}
