import { USER_REQUEST, USER_REQUEST_FAIL, USER_REQUEST_SUCCESS } from "../constants/userConstants"


export const userReducer = (
    state = { userDetails: [] },
    { type, payload }) => {
    switch (type) {
        case USER_REQUEST: return { isLoading: true }
        case USER_REQUEST_SUCCESS: return { userDetails: payload, isLoading: false }
        case USER_REQUEST_FAIL: return { error: payload, isLoading: false }
        default: return state
    }
}