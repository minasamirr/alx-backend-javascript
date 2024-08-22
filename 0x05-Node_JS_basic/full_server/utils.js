import fs from 'fs/promises';

export async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line);
    const students = {};

    for (const line of lines) {
      const [firstname, , , field] = line.split(',');
      if (field in students) {
        students[field].push(firstname);
      } else {
        students[field] = [firstname];
      }
    }
    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
