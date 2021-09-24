import { createSelector } from "reselect";

const seletRentcondo = state => state.rentcondo

export const selecttargetitem = createSelector(
  [seletRentcondo],
  (rentcondo) => rentcondo.targetItem
);
export const selectitems = createSelector(
  [seletRentcondo],
  (rentcondo) => rentcondo.items
);