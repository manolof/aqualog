import {
	deleteMeasurement,
	getAllMeasurements,
	addMeasurement,
	updateMeasurement,
	addMeasurementLimits,
	getMeasurementLimits,
	updateMeasurementLimits,
} from '../services/measurements';

const MeasurementsActions = Object.freeze({
	GET_ALL_MEASUREMENTS_START: '[Measurements] GET ALL MEASUREMENTS Start',
	GET_ALL_MEASUREMENTS_SUCCESS: '[Measurements] GET ALL MEASUREMENTS Success',
	GET_ALL_MEASUREMENTS_FAIL: '[Measurements] GET ALL MEASUREMENTS Fail',
	ADD_MEASUREMENT_START: '[Measurements] ADD MEASUREMENT Start',
	ADD_MEASUREMENT_SUCCESS: '[Measurements] ADD MEASUREMENT Success',
	ADD_MEASUREMENT_FAIL: '[Measurements] ADD MEASUREMENT Fail',
	UPDATE_MEASUREMENT_START: '[Measurements] UPDATE MEASUREMENT Start',
	UPDATE_MEASUREMENT_SUCCESS: '[Measurements] UPDATE MEASUREMENT Success',
	UPDATE_MEASUREMENT_FAIL: '[Measurements] UPDATE MEASUREMENT Fail',
	DELETE_MEASUREMENT_START: '[Measurements] DELETE MEASUREMENT Start',
	DELETE_MEASUREMENT_SUCCESS: '[Measurements] DELETE MEASUREMENT Success',
	DELETE_MEASUREMENT_FAIL: '[Measurements] DELETE MEASUREMENT Fail',
	GET_MEASUREMENT_LIMITS_START: '[Measurements] GET MEASUREMENT LIMITS Start',
	GET_MEASUREMENT_LIMITS_SUCCESS: '[Measurements] GET MEASUREMENT LIMITS Success',
	GET_MEASUREMENT_LIMITS_FAIL: '[Measurements] GET MEASUREMENT LIMITS Fail',
	ADD_MEASUREMENT_LIMITS_START: '[Measurements] ADD MEASUREMENT LIMITS Start',
	ADD_MEASUREMENT_LIMITS_SUCCESS: '[Measurements] ADD MEASUREMENT LIMITS Success',
	ADD_MEASUREMENT_LIMITS_FAIL: '[Measurements] ADD MEASUREMENT LIMITS Fail',
	UPDATE_MEASUREMENT_LIMITS_START: '[Measurements] UPDATE MEASUREMENT LIMITS Start',
	UPDATE_MEASUREMENT_LIMITS_SUCCESS: '[Measurements] UPDATE MEASUREMENT LIMITS Success',
	UPDATE_MEASUREMENT_LIMITS_FAIL: '[Measurements] UPDATE MEASUREMENT LIMITS Fail',
	TOGGLE_MODAL: '[Measurements] TOGGLE MODAL',
});

const getAllMeasurementsStartAction = () => ({
	type: MeasurementsActions.GET_ALL_MEASUREMENTS_START,
});

const getAllMeasurementsSuccessAction = (payload) => ({
	type: MeasurementsActions.GET_ALL_MEASUREMENTS_SUCCESS,
	payload,
});

const getAllMeasurementsFailAction = (error) => ({
	type: MeasurementsActions.GET_ALL_MEASUREMENTS_FAIL,
	error,
});

const getAllMeasurementsAction = (uid) => {
	return (dispatch) => {
		dispatch(getAllMeasurementsStartAction());

		return getAllMeasurements(uid)
			.then((response) => dispatch(getAllMeasurementsSuccessAction(response)))
			.catch((error) => dispatch(getAllMeasurementsFailAction(error)));
	};
};

const addMeasurementStartAction = () => ({
	type: MeasurementsActions.ADD_MEASUREMENT_START,
});

const addMeasurementSuccessAction = (payload) => ({
	type: MeasurementsActions.ADD_MEASUREMENT_SUCCESS,
	payload,
});

const addMeasurementFailAction = (error) => ({
	type: MeasurementsActions.ADD_MEASUREMENT_FAIL,
	error,
});

const addMeasurementAction = (payload, uid) => {
	return (dispatch) => {
		dispatch(addMeasurementStartAction());

		return addMeasurement(payload, uid)
			.then((response) => dispatch(addMeasurementSuccessAction(response)))
			.catch((error) => dispatch(addMeasurementFailAction(error)));
	};
};

const updateMeasurementStartAction = () => ({
	type: MeasurementsActions.UPDATE_MEASUREMENT_START,
});

const updateMeasurementSuccessAction = (payload) => ({
	type: MeasurementsActions.UPDATE_MEASUREMENT_SUCCESS,
	payload,
});

const updateMeasurementFailAction = (error) => ({
	type: MeasurementsActions.UPDATE_MEASUREMENT_FAIL,
	error,
});

const updateMeasurementAction = (payload, id) => {
	return (dispatch) => {
		dispatch(updateMeasurementStartAction());

		return updateMeasurement(payload, id)
			.then((response) => dispatch(updateMeasurementSuccessAction(response)))
			.catch((error) => dispatch(updateMeasurementFailAction(error)));
	};
};

const deleteMeasurementStartAction = () => ({
	type: MeasurementsActions.DELETE_MEASUREMENT_START,
});

const deleteMeasurementSuccessAction = (payload) => ({
	type: MeasurementsActions.DELETE_MEASUREMENT_SUCCESS,
	payload,
});

const deleteMeasurementFailAction = (error) => ({
	type: MeasurementsActions.DELETE_MEASUREMENT_FAIL,
	error,
});

const deleteMeasurementAction = (id) => {
	return (dispatch) => {
		dispatch(deleteMeasurementStartAction());

		return deleteMeasurement(id)
			.then(() => dispatch(deleteMeasurementSuccessAction(id)))
			.catch((error) => dispatch(deleteMeasurementFailAction(error)));
	};
};

const getMeasurementLimitsStartAction = () => ({
	type: MeasurementsActions.GET_MEASUREMENT_LIMITS_START,
});

const getMeasurementLimitsSuccessAction = (payload) => ({
	type: MeasurementsActions.GET_MEASUREMENT_LIMITS_SUCCESS,
	payload,
});

const getMeasurementLimitsFailAction = (error) => ({
	type: MeasurementsActions.GET_MEASUREMENT_LIMITS_FAIL,
	error,
});

const getMeasurementLimitsAction = (uid) => {
	return (dispatch) => {
		dispatch(getMeasurementLimitsStartAction());

		return getMeasurementLimits(uid)
			.then((response) => dispatch(getMeasurementLimitsSuccessAction(response)))
			.catch((error) => dispatch(getMeasurementLimitsFailAction(error)));
	};
};

const addMeasurementLimitsStartAction = () => ({
	type: MeasurementsActions.ADD_MEASUREMENT_LIMITS_START,
});

const addMeasurementLimitsSuccessAction = (payload) => ({
	type: MeasurementsActions.ADD_MEASUREMENT_LIMITS_SUCCESS,
	payload,
});

const addMeasurementLimitsFailAction = (error) => ({
	type: MeasurementsActions.ADD_MEASUREMENT_LIMITS_FAIL,
	error,
});

const addMeasurementLimitsAction = (payload, uid) => {
	return (dispatch) => {
		dispatch(addMeasurementLimitsStartAction());

		return addMeasurementLimits(payload, uid)
			.then((response) => dispatch(addMeasurementLimitsSuccessAction(response)))
			.catch((error) => dispatch(addMeasurementLimitsFailAction(error)));
	};
};

const updateMeasurementLimitsStartAction = () => ({
	type: MeasurementsActions.UPDATE_MEASUREMENT_LIMITS_START,
});

const updateMeasurementLimitsSuccessAction = (payload) => ({
	type: MeasurementsActions.UPDATE_MEASUREMENT_LIMITS_SUCCESS,
	payload,
});

const updateMeasurementLimitsFailAction = (error) => ({
	type: MeasurementsActions.UPDATE_MEASUREMENT_LIMITS_FAIL,
	error,
});

const updateMeasurementLimitsAction = (payload, uid) => {
	return (dispatch) => {
		dispatch(updateMeasurementLimitsStartAction());

		return updateMeasurementLimits(payload, uid)
			.then((response) => dispatch(updateMeasurementLimitsSuccessAction(response)))
			.catch((error) => dispatch(updateMeasurementLimitsFailAction(error)));
	};
};

const toggleModalAction = (payload) => ({
	type: MeasurementsActions.TOGGLE_MODAL,
	payload,
});

export {
	MeasurementsActions,
	getAllMeasurementsStartAction,
	getAllMeasurementsSuccessAction,
	getAllMeasurementsFailAction,
	getAllMeasurementsAction,
	addMeasurementStartAction,
	addMeasurementSuccessAction,
	addMeasurementFailAction,
	addMeasurementAction,
	updateMeasurementStartAction,
	updateMeasurementSuccessAction,
	updateMeasurementFailAction,
	updateMeasurementAction,
	deleteMeasurementStartAction,
	deleteMeasurementSuccessAction,
	deleteMeasurementFailAction,
	deleteMeasurementAction,
	getMeasurementLimitsStartAction,
	getMeasurementLimitsSuccessAction,
	getMeasurementLimitsFailAction,
	getMeasurementLimitsAction,
	addMeasurementLimitsStartAction,
	addMeasurementLimitsSuccessAction,
	addMeasurementLimitsFailAction,
	addMeasurementLimitsAction,
	updateMeasurementLimitsStartAction,
	updateMeasurementLimitsSuccessAction,
	updateMeasurementLimitsFailAction,
	updateMeasurementLimitsAction,
	toggleModalAction,
};
