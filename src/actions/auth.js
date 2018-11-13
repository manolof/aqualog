import { getAuthUser, signIn, signOut, updateUserData } from '../services/auth';

const AuthenticationActions = Object.freeze({
	GET_AUTH_USER_START: '[Authentication] GET AUTH USER Start',
	GET_AUTH_USER_SUCCESS: '[Authentication] GET AUTH USER Success',
	GET_AUTH_USER_FAIL: '[Authentication] GET AUTH USER Fail',
	SIGN_IN_START: '[Authentication] SIGN IN Start',
	SIGN_IN_SUCCESS: '[Authentication] SIGN IN Success',
	SIGN_IN_FAIL: '[Authentication] SIGN IN Fail',
	UPDATE_USER_DATA_START: '[Authentication] UPDATE USER DATA Start',
	UPDATE_USER_DATA_SUCCESS: '[Authentication] UPDATE USER DATA Success',
	UPDATE_USER_DATA_FAIL: '[Authentication] UPDATE USER DATA Fail',
	SIGN_OUT_SUCCESS: '[Authentication] SIGN OUT Success',
});

const getAuthUserStartAction = () => ({
	type: AuthenticationActions.GET_AUTH_USER_START,
});

const getAuthUserSuccessAction = (payload) => ({
	type: AuthenticationActions.GET_AUTH_USER_SUCCESS,
	payload,
});

const getAuthUserFailAction = (error) => ({
	type: AuthenticationActions.GET_AUTH_USER_FAIL,
	error,
});

const getAuthUserAction = () => {
	return (dispatch) => {
		dispatch(getAuthUserStartAction());

		return getAuthUser()
			.then((response) => dispatch(getAuthUserSuccessAction(response)))
			.catch((error) => dispatch(getAuthUserFailAction(error)));
	};
};

const signInStartAction = () => ({
	type: AuthenticationActions.SIGN_IN_START,
});

const signInSuccessAction = (payload) => ({
	type: AuthenticationActions.SIGN_IN_SUCCESS,
	payload,
});

const signInFailAction = (error) => ({
	type: AuthenticationActions.SIGN_IN_FAIL,
	error,
});

const signInAction = () => {
	return (dispatch, getState) => {
		dispatch(signInStartAction());

		return signIn()
			.then((userData) => {
				dispatch(signInSuccessAction(userData));

				updateUserDataAction()(dispatch, getState);
			})
			.catch((error) => dispatch(signInFailAction(error)));
	};
};

const updateUserDataStartAction = () => ({
	type: AuthenticationActions.UPDATE_USER_DATA_START,
});

const updateUserDataSuccessAction = () => ({
	type: AuthenticationActions.UPDATE_USER_DATA_SUCCESS,
});

const updateUserDataFailAction = (error) => ({
	type: AuthenticationActions.UPDATE_USER_DATA_FAIL,
	error,
});

const updateUserDataAction = () => {
	return (dispatch, getState) => {
		dispatch(updateUserDataStartAction());

		return updateUserData(getState().auth.user)
			.then(() => dispatch(updateUserDataSuccessAction()))
			.catch((error) => dispatch(updateUserDataFailAction(error)));
	};
};

const signOutSuccessAction = () => ({
	type: AuthenticationActions.SIGN_OUT_SUCCESS,
});

const signOutAction = () => {
	return (dispatch) => {
		return signOut()
			.then(() => dispatch(signOutSuccessAction()));
	};
};

export {
	AuthenticationActions,
	getAuthUserStartAction,
	getAuthUserSuccessAction,
	getAuthUserFailAction,
	getAuthUserAction,
	signInStartAction,
	signInSuccessAction,
	signInFailAction,
	signInAction,
	signOutSuccessAction,
	signOutAction,
};
