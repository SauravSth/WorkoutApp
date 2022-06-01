const Pool = require('pg').Pool

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'workout_app',
	password: 'naruxhina',
	port: 5432,
})

module.exports = pool
