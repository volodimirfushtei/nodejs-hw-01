import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const PATH_DB = path.join(_dirname, '..', 'db', 'db.json');
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
