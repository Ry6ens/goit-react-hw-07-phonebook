import { createReducer } from "@reduxjs/toolkit";

// import {
//   addContactAction,
//   removeContactAction,
//   filterContactAction,
// } from "./action";

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactAction,
  filterContactAction,
} from "./action";

const initialState = [];
const initialFilterState = "";

export const contactReducer = createReducer(initialState, (builder) => {
  builder.addCase(addContactSuccess, (state, { payload }) => [
    ...state,
    payload,
  ]);
  builder.addCase(removeContactAction, (state, { payload }) =>
    state.filter((el) => el.id !== payload)
  );
});

export const filterReducer = createReducer(initialFilterState, (builder) => {
  builder.addCase(filterContactAction, (state, { payload }) => {
    return payload;
  });
});

export const loadingReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
});
