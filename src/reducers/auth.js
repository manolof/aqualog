import { AuthenticationActions } from '../actions/auth';

export const initialState = {
	authenticated: false,
	authenticationInitialCheckComplete: false,
	loading: false,
	user: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AuthenticationActions.SIGN_IN_START:
		case AuthenticationActions.GET_AUTH_USER_START:
			return {
				...state,
				loading: true,
			};

		case AuthenticationActions.SIGN_IN_SUCCESS:
			return {
				...state,
				authenticated: true,
				loading: false,
				user: action.payload,
			};

		case AuthenticationActions.GET_AUTH_USER_SUCCESS:
			return {
				...state,
				authenticated: true,
				loading: false,
				user: action.payload,
				authenticationInitialCheckComplete: true,
			};

		case AuthenticationActions.GET_AUTH_USER_FAIL:
			return {
				...initialState,
				authenticationInitialCheckComplete: true,
			};

		case AuthenticationActions.SIGN_OUT_SUCCESS:
			return {
				...initialState,
				authenticationInitialCheckComplete: true,
			};

		default:
			return state;
	}
};

export {
	authReducer,
};
