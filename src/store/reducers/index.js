import {combineReducers} from "redux";
import currentUser from "./currentUser";
import error from "./errors";
import messages from "./messages";

const rootReducer = combineReducers({
    currentUser,
    error,
    messages
});

export default rootReducer;