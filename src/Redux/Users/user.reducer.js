import Useractiontypes from "./users.type";

const INITIAL_VALUE={
  currentUser:null,
  error:null
}

const userReducer = (state = INITIAL_VALUE, action) =>{
  switch (action.type){
    case Useractiontypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case Useractiontypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error:null
      };
    case Useractiontypes.SIGN_IN_FAILURE:
    case Useractiontypes.SIGN_OUT_FAILURE:
    case Useractiontypes.SIGN_UP_FAILURE:
      return{
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default userReducer