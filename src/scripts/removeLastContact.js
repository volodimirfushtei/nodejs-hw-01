import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);
    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
      console.log('Last contact removed successfully');
    } else {
      console.log('No contacts to remove');
    }
    return contacts;
  } catch (error) {
    console.error('Error removing  contact:', error);
    throw error;
  }
};

removeLastContact();
