import { USER_LOGIN, USER_REGISTER } from "../actions/actionType";


const initialState = {
    users : {},
    isLogin: false
}

function userReducer(state = initialState, action){
    switch (action.type) {
        case USER_REGISTER:
            return {
                ...state,
                users: action.payload,
            }
        case USER_LOGIN:
            return {
                ...state,
                isLogin: action.payload,
            }
        default:
            return state;        
    }
}

export default userReducer