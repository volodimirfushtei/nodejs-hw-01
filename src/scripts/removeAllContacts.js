import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.readFile(PATH_DB, 'utf8');

    // Очищаємо файл, записуючи порожній масив
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf8');

    console.log('All contacts removed successfully');

    return [];
  } catch (error) {
    console.error('Error removing all contacts:', error);
    throw error;
  }
};

removeAllContacts();
