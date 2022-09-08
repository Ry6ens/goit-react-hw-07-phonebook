import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: "",
  reducers: {
    setError: (_, { payload }) => payload,
    resetError: () => "",
  },
});

export const { setError, resetError } = errorSlice.actions;
