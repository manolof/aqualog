import { AuthenticationActions } from '../actions/auth';
import { MeasurementsActions } from '../actions/measurements';

export const initialState = {
	loading: false,
	items: [],
	limits: [],
	modal: {
		id: null,
		open: false,
		tempItemValues: {},
	},
};

const measurementsReducer = (state = initialState, action) => {
	const payload = action.payload;

	switch (action.type) {
		case MeasurementsActions.GET_ALL_MEASUREMENTS_START:
		case MeasurementsActions.GET_MEASUREMENT_LIMITS_START:
			return {
				...state,
				loading: true,
			};

		case MeasurementsActions.GET_ALL_MEASUREMENTS_SUCCESS:
			return {
				...state,
				loading: false,
				items: payload,
			};

		case MeasurementsActions.GET_MEASUREMENT_LIMITS_SUCCESS:
			return {
				...state,
				loading: false,
				limits: payload,
			};

		case MeasurementsActions.GET_ALL_MEASUREMENTS_FAIL:
		case MeasurementsActions.GET_MEASUREMENT_LIMITS_FAIL:
			return {
				...state,
				loading: false,
			};

		case MeasurementsActions.ADD_MEASUREMENT_SUCCESS:
			return {
				...state,
				items: [
					...state.items,
					payload,
				],
			};

		case MeasurementsActions.ADD_MEASUREMENT_LIMITS_SUCCESS:
			return {
				...state,
				limits: [
					...state.limits,
					payload,
				],
			};

		case MeasurementsActions.UPDATE_MEASUREMENT_SUCCESS:
			const updatedMeasurements = state.items
				.map((measurement) => {
					if (measurement.id !== payload.id) {
						return measurement;
					}

					return {
						...measurement,
						date: payload.date,
						values: payload.values,
					};
				});

			return {
				...state,
				items: updatedMeasurements,
			};

		case MeasurementsActions.UPDATE_MEASUREMENT_LIMITS_SUCCESS:
			const updatedMeasurementLimits = state.limits
				.map((measurementLimit) => {
					if (measurementLimit.id !== payload.id) {
						return measurementLimit;
					}

					return {
						...measurementLimit,
						values: payload.values,
					};
				});

			return {
				...state,
				limits: updatedMeasurementLimits,
			};

		case MeasurementsActions.DELETE_MEASUREMENT_SUCCESS:
			return {
				...state,
				items: state.items.filter((measurement) => measurement.id !== payload),
			};

		case MeasurementsActions.TOGGLE_MODAL:
			return {
				...state,
				modal: {
					...state.modal,
					...payload,
				},
			};

		case AuthenticationActions.SIGN_OUT_SUCCESS:
			return initialState;

		default:
			return state;
	}
};

export {
	measurementsReducer,
};
