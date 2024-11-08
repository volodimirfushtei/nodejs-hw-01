import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const existingContacts = await readContacts();
  try {
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`Generated ${number} contacts.`);
  } catch (error) {
    console.error('Error:', error);
  }
};
generateContacts(5);
