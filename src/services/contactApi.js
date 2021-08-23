import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export class ContactsAPI {
  static async fetchContactsList() {
    const { data } = await axios.get('/contacts');

    return data;
  }

  static async createContact(contact) {
    const { data } = await axios.post('/contacts', contact);

    return data;
  }

  static async deleteContact(contactId) {
    await axios.delete(`/contacts/${contactId}`);
  }

  static async patchContact(contactId) {
    const { data } = await axios.patch(`/contacts/${contactId}`);
    return data;
  }
}
