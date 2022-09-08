import axios from "axios";

axios.defaults.baseURL = "https://631878cbf6b281877c6d54c6.mockapi.io";

export const fetchPostContacts = async (contact) => {
  return await axios.post("/contacts", contact);
};

export const fetchGetContacts = async () => {
  return await axios.get("/contacts");
};

export const fetchDeleteContacts = async (id) => {
  return await axios.delete(`/contacts/${id}`);
};
