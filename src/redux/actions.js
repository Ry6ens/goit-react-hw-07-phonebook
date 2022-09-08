import { createAction } from "@reduxjs/toolkit";

// export const removeContactAction = createAction("removeContactAction");
export const filterContactAction = createAction("filterContactAction");
//
export const postContact = createAction("contacts/fetch/post");
export const getContact = createAction("contacts/fetch/get");
