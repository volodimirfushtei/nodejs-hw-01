import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const existingContacts = await readContacts();
  try {
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      const contact = createFakeContact();
      newContacts.push(contact);
    }
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`Add ${number} contacts.`);
  } catch (error) {
    console.error('Error:', error);
  }
};

generateContacts(5);
