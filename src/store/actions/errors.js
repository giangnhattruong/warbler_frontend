import {ADD_ERROR, REMOVE_ERROR} from "../actionTypes";

export const addError = errorMessage => ({
    type: ADD_ERROR,
    errorMessage
});

export const removeError = () => ({
    type: REMOVE_ERROR
})