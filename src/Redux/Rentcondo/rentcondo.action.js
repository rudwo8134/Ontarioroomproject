import rentcondotype from "./rentcondo.type";

export const detailroomstart = (query) =>({
  type: rentcondotype.READ_DETAIL_CONDOROOM_START,
  payload: query
})

export const detailroomsuccess = (data) =>({
  type: rentcondotype.READ_DETAIL_CONDOROOM_SUCCESS,
  payload:data
})

export const detailroomfailed = (error) => ({
  type: rentcondotype.READ_DETAIL_CONDOROOM_FAILURE,
  payload:error
})

export const rentcondopoststart = (data) =>({
  type: rentcondotype.POST_CONDOROOM_START,
  payload:data
})

export const rentcondopostFail = (error) => ({
  type: rentcondotype.POST_CONDOROOM_FAILURE,
  payload:error
});

export const rentcondopostSuccess = (item) => ({
  type: rentcondotype.POST_CONDOROOM_SUCCESS,
  payload:item
});

export const rentcondoreadstart = () => ({
  type: rentcondotype.READ_CONDOROOM_START,
});

export const rentcondoreadFail = (error) => ({
  type: rentcondotype.READ_CONDOROOM_FAILURE,
  payload: error,
});

export const rentcondoreadSuccess = (items) => ({
  type: rentcondotype.READ_CONDOROOM_SUCCESS,
  payload: items,
});

export const rentcondodeletestart = () => ({
  type: rentcondotype.DELETE_CONDOROOM_START,
});

export const rentcondodeleteFail = (error) => ({
  type: rentcondotype.DELETE_CONDOROOM_FAILURE,
  payload: error,
});

export const rentcondodeleteSuccess = (item) => ({
  type: rentcondotype.DELETE_CONDOROOM_SUCCESS,
  payload: item,
});
export const rentcondoupdatestart = () => ({
  type: rentcondotype.UPDATE_CONDOROOM_START,
});

export const rentcondoupdateFail = (error) => ({
  type: rentcondotype.UPDATE_CONDOROOM_FAILURE,
  payload: error,
});

export const rentcondoupdateSuccess = (item) => ({
  type: rentcondotype.UPDATE_CONDOROOM_SUCCESS,
  payload: item,
});

export const filterdatasuccess = (filter) =>({
  type: rentcondotype.FILTER_CONDOROOM_SUCCESS,
  payload: filter
})


export const filterdatafail = (err) => ({
  type: rentcondotype.FILTER_CONDOROOM_SUCCESS,
  payload: err,
});

export const addressupdatestart = (data) => ({
  type: rentcondotype.ADDRESS_SET_CONDOROOM_START,
  data: data,
});

export const addressupdateFail = (error) => ({
  type: rentcondotype.ADDRESS_SET_CONDOROOM_FAILURE,
  payload: error,
});

export const addressupdateSuccess = (data) => ({
  type: rentcondotype.ADDRESS_SET_CONDOROOM_SUCCESS,
  payload: data,
});
