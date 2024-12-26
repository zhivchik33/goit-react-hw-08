import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/selectors";

export const selectItems = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectItems, selectFilter],
  (items, filter) =>
    items.filter((item) => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    })
);
