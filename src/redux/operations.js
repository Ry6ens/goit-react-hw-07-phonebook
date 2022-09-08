import axios from "axios";

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from "./action";

axios.defaults.baseURL = "https://631878cbf6b281877c6d54c6.mockapi.io";

export const addContactAction = (data) => (dispatch) => {
  const contact = data;

  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};
