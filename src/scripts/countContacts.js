import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(`Contacts : ${contacts.length}`);
    return contacts.length;
  } catch (error) {
    console.error('Error reading contacts:', error);
    return 0;
  }
};
countContacts();
