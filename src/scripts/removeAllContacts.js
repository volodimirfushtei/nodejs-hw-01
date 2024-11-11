import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeAllContacts = async () => {
  try {
    let contacts = await readContacts();
    if (contacts.length > 0) {
      console.log(`Removing ${contacts.length} contacts...`);
      contacts = [];
      await writeContacts([]);
      console.log(`All contacts removed successfully`);
      return [];
    }
  } catch (error) {
    console.error('Error removing contacts:', error);
    throw error;
  }
};

removeAllContacts();
