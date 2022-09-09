import { createReducer, createSlice } from "@reduxjs/toolkit";

import { filterContactAction } from "./actions";

const initialFilterState = "";

export const filterReducer = createReducer(initialFilterState, (builder) => {
  builder.addCase(filterContactAction, (state, { payload }) => {
    console.log(state);
    return payload;
  });
});

const getContactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    getContacts: (state, { payload }) => payload,
    postContact: (state, { payload }) => {
      console.log(payload);
      state.push(payload);
    },
    removeContacts: (state, { payload }) => {
      return state.filter((el) => el.id !== payload);
    },
  },
});

export const { getContacts, postContact, removeContacts } =
  getContactsSlice.actions;

export const { reducer } = getContactsSlice;
