import { PATH_DB } from '../constants/path.js';
import fs from 'node:fs/promises';

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
