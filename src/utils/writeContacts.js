import path from 'node:path';
import fs from 'node:fs/promises';

const PATH_DB = path.resolve('src/db/db.json');
export const writeContacts = async (contacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');

    console.log('Contacts updated successfully');
    return contacts;
  } catch (error) {
    console.error('Error updating contacts:', error);
    throw error;
  }
};
