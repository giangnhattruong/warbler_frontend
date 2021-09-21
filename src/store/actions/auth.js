import { apiCall, setTokenHeader } from "../../services/api";
import {SET_CURRENT_USER} from "../actionTypes";
import { addError, removeError } from "./errors";

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    user
});

export const setAuthorizationToken = token => {
    setTokenHeader(token);
}

export const signOut = () => {
    return dispatch => {
        localStorage.clear();
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
};

export const authUser = (type, userData) => {
    return async (dispatch) => {
        try{
            const res = await apiCall("post", `/api/auth/${type}`, userData);
            const {token, ...user} = res;
            if(token) {
                localStorage.setItem("jwtToken", token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(user));
                dispatch(removeError());
            }
        } 
        catch(err) {
            const {message} = err;
            dispatch(addError(message));
        }
    }
};