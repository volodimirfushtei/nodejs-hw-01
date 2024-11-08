import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (err) {
    console.error('Error reading contacts:', err);
    return [];
  }
};

console.log(await getAllContacts());
