import path from 'node:path';
import fs from 'node:fs/promises';

const PATH_DB = path.resolve('src/db/db.json');
export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};
