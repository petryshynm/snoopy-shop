import { AuthTypes } from "./auth.types";

export const loginUserRequest = (user) => ({
    type: AuthTypes.LOGIN_REQUEST,
    payload: user,
});
export const loginUserSuccess = (role) => ({
    type: AuthTypes.LOGIN_SUCCESS,
    payload: role
});
export const loginUserFailure = (error) => ({
    type: AuthTypes.LOGIN_FAILURE,
    payload: error,
});

export const registerUserRequest = (user) => ({
    type: AuthTypes.REGISTER_REQUEST,
    payload: user,
});
export const registerUserSuccess = (message) => ({
    type: AuthTypes.REGISTER_SUCCESS,
    payload: message
});
export const registerUserFailure = (message) => ({
    type: AuthTypes.REGISTER_FAILURE,
    payload: message,
});

export const logoutUserRequest = () => ({
    type: AuthTypes.LOGOUT_REQUEST,
});
export const logoutUserSuccess = () => ({
    type: AuthTypes.LOGOUT_SUCCESS,
});
export const logoutUserFailure = (error) => ({
    type: AuthTypes.LOGOUT_FAILURE,
    payload: error,
});