import { SET_CURRENT_USER } from "../actionTypes";

// after a user logged in, they will be authenticated
// and we will see all of their info
// when they log out, we change the state back to it's default
const DEFAULT_USER_STATE = {
    isAuthenticated: false,
    user: {}
}

const currentUser = (state=DEFAULT_USER_STATE, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                // "!!" turn empty object into false, if there are keys then true
                // is works the same as Object.keys(action.user).length > 0
                // if user log out, we run SET_CURRENT_USER again, then user will be set as {} so isAuthenticated become false
                // so we don't need action LOG_OUT
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user
            }
        default:
            return state
    }
};

export default currentUser;