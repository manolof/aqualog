import { createStore } from 'redux';

import { signInStartAction } from '../actions/auth';
import { authReducer } from './auth';
import { rootReducer } from './root';

const store = createStore(rootReducer);

describe('rootReducer', () => {
	it(`should check that initial state of the root reducer matches
		what child reducers return given an empty action`, () => {
		expect(store.getState().authReducer).toEqual(authReducer(undefined, {}));
	});

	it(`should check that child reducers handle an action`, () => {
		const action = signInStartAction();
		store.dispatch(action);
		expect(store.getState().authReducer).toEqual(authReducer(undefined, action));
	});
});
