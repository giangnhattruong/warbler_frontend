import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";

export const loadMessages = (messages) => ({
    type: LOAD_MESSAGES,
    messages
});

export const fetchMessages = () => {
    return async (dispatch) => {
        try {
            const res = await apiCall("get", "/api/messages");
            dispatch(loadMessages(res));
        }
        catch(err) {
            const {message} = err;
            dispatch(addError(message));
        }
    }
}