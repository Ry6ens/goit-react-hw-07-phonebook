export const getFilterContacts = (state, payload) => {
  console.log(state.contacts.items);
  if (state.contacts.items.length === 0) {
    return state.contacts.items;
  }

  return state.contacts.items.filter((el) =>
    el.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  );
};
