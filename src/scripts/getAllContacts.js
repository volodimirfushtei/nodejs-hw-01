import { readContacts } from '../utils/readContacts.js'; // Імпортуємо функцію readContacts

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
