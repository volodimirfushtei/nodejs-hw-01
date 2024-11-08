import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    let contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      console.log('Last contact removed successfully');
    } else {
      console.log('No contacts to remove');
    }
    return contacts;
  } catch (error) {
    console.error('Error removing contact:', error);
    throw error;
  }
};

removeLastContact();
