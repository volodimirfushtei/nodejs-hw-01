import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');

    let contacts = [];
    try {
      contacts = JSON.parse(data) || [];
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      return;
    }
    const newContact = createFakeContact();
    contacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    console.log(
      `New contact added successfully: ${JSON.stringify(newContact, null, 2)}`,
    );
  } catch (err) {
    console.error('Error file:', err);
  }
};

addOneContact();
