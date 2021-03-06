import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

const error = (state={message: null}, action) => {
    switch(action.type) {
        case ADD_ERROR:
            return { 
                ...state,
                message: action.errorMessage
            }
        case REMOVE_ERROR:
            return {
                ...state,
                message: null
            }
        default:
            return state
    }
};

export default error;