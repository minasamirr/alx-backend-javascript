const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n').slice(1); // Skip header
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
