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
export const selectfilter = createSelector(
  [seletRentcondo],
  (rentcondo) => rentcondo.filter
);

export const selectdetailitem = createSelector(
  [seletRentcondo],
  (rentcondo) => rentcondo.detailitem
);

export const selectdetailaddress = createSelector(
  [seletRentcondo],
  (rentcondo) => rentcondo.address
);