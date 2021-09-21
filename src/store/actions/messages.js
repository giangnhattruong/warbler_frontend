import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";

export const loadMessages = (messages) => ({
    type: LOAD_MESSAGES,
    messages
});

export const remove = id => ({
    type: REMOVE_MESSAGE,
    id
})

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

export const postNewMessage = text => {
    return async (dispatch, getState) => {
        let {currentUser} = getState();
        const userId = currentUser.user.id
        try {
            await apiCall("post", `/api/users/${userId}/messages`, {text});
        }
        catch(err) {
            const {message} = err;
            dispatch(addError(message));
        }
    }
}

export const removeMessage = (user_id, message_id) => {
    return async (dispatch) => {
        try {
            await apiCall("delete", `/api/users/${user_id}/messages/${message_id}`);
            dispatch(remove(message_id));
        }
        catch(err) {
            const {message} = err;
            dispatch(addError(message));
        }
    }
}