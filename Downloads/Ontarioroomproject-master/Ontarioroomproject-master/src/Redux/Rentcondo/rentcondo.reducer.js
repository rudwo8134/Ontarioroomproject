import Useractiontypes from "../Users/users.type";
import rentcondotype from "./rentcondo.type";

const INITIAL_VALUE = {
  targetItem:null,
  items:null,
  error:null,
  filter:null,
  detailitem:null
}

const rentcondoReducer = (state=INITIAL_VALUE, action)=>{
  switch(action.type){
    case rentcondotype.READ_CONDOROOM_SUCCESS:
      return{
        ...state,
        items: action.payload
      }
    case rentcondotype.READ_DETAIL_CONDOROOM_SUCCESS:
      return{
        ...state,
        detailitem: action.payload
      }
    case rentcondotype.UPDATE_CONDOROOM_SUCCESS:
    case rentcondotype.DELETE_CONDOROOM_SUCCESS:
    case rentcondotype.POST_CONDOROOM_SUCCESS:
      return{
        ...state,
        items: null,
        targetItem: action.payload,
        error:null
      }
    case rentcondotype.FILTER_CONDOROOM_SUCCESS:
    return{
      ...state,
      filter:action.payload
    }
    case rentcondotype.READ_DETAIL_CONDOROOM_FAILURE:
    case rentcondotype.FILTER_CONDOROOM_FAIL:
    case rentcondotype.POST_CONDOROOM_FAILURE:
    case rentcondotype.READ_CONDOROOM_FAILURE:
    case rentcondotype.UPDATE_CONDOROOM_FAILURE:
    case rentcondotype.DELETE_CONDOROOM_FAILURE:
      return{
        ...state,
        error: action.payload
      }
    
    default: 
    return state
  }
}

export  default rentcondoReducer