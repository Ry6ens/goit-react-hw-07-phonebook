// import axios from "axios";

// import {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
// } from "./action";

// axios.defaults.baseURL = "https://631878cbf6b281877c6d54c6.mockapi.io";

// export const addContactAction = (data) => (dispatch) => {
//   const contact = data;

//   dispatch(addContactRequest());

//   axios
//     .post("/contacts", contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch((error) => dispatch(addContactError(error)));
// };
import Notiflix from "notiflix";
import {
  fetchPostContacts,
  fetchGetContacts,
  fetchDeleteContacts,
} from "../services/api";
import { postContact } from "./actions";
import { setError, resetError } from "./error/errorSlice";
import { onLoader, offLoader } from "./loader/loaderSlice";
import { getContacts, removeContacts } from "./reducer";

const isDuplicate = ({ name }, contacts) => {
  const normalizedName = name.toLowerCase();
  console.log(contacts);

  const result = contacts.find((item) => {
    return normalizedName === item.name.toLowerCase();
  });
  console.log(Boolean(result));

  return Boolean(result);
};

export const postContactsOperations = (data) => {
  return async (dispatch, getState) => {
    const { contacts } = getState();
    if (isDuplicate(data, contacts.items)) {
      return Notiflix.Notify.warning(`${data.name} is already exists`);
    }
    try {
      const contacts = await fetchPostContacts(data);
      dispatch(postContact(contacts));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const getContactsOperations = () => {
  return async (dispatch) => {
    try {
      dispatch(resetError());
      dispatch(onLoader());
      const contacts = await fetchGetContacts();
      dispatch(getContacts(contacts.data));
      dispatch(offLoader());
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(offLoader());
    }
  };
};

export const removeContactsOperation = (id) => {
  return async (dispatch) => {
    try {
      const contacts = await fetchDeleteContacts(id);
      dispatch(removeContacts(contacts));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
