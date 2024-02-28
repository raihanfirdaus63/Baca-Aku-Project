import { combineReducers } from "redux";
import personalityReducer from "./personalityReducer";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    personality: personalityReducer,
    user: userReducer
})

export default rootReducer