import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';
export const writeContacts = async (updatedContacts) => {
  try {
    await fs.promises.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
    );
    console.log('Contacts updated successfully');
    return updatedContacts;
  } catch (error) {
    console.error('Error updating contacts:', error);
    throw error;
  }
};
