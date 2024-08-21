const fs = require('fs');

function countStudents(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf8', (err, data) => {
			if (err) {
				reject(new Error('Cannot load the database'));
			} else {
				const lines = data.trim().split('\n').slice(1);
				const students = lines.filter(line => line).map(line => line.split(','));

				console.log(`Number of students: ${students.length}`);

				const fields = {};
				students.forEach(([firstName, , , field]) => {
					if (!fields[field]) {
						fields[field] = [];
					}
					fields[field].push(firstName);
				});

				for (const [field, students] of Object.entries(fields)) {
					console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
				}

				resolve();
			}
		});
	});
}

module.exports = countStudents;
