import {
	deleteMaintenanceLogRecord,
	getAllMaintenanceLogRecords,
	addMaintenanceLogRecord,
	updateMaintenanceLogRecord,
} from '../services/maintenance';

const MaintenanceLogRecordsActions = Object.freeze({
	GET_ALL_MAINTENANCE_LOG_RECORDS_START: '[MaintenanceLogRecords] GET ALL MAINTENANCE LOG RECORDS Start',
	GET_ALL_MAINTENANCE_LOG_RECORDS_SUCCESS: '[MaintenanceLogRecords] GET ALL MAINTENANCE LOG RECORDS Success',
	GET_ALL_MAINTENANCE_LOG_RECORDS_FAIL: '[MaintenanceLogRecords] GET ALL MAINTENANCE LOG RECORDS Fail',
	ADD_MAINTENANCE_LOG_RECORD_START: '[MaintenanceLogRecords] ADD MAINTENANCE LOG RECORD Start',
	ADD_MAINTENANCE_LOG_RECORD_SUCCESS: '[MaintenanceLogRecords] ADD MAINTENANCE LOG RECORD Success',
	ADD_MAINTENANCE_LOG_RECORD_FAIL: '[MaintenanceLogRecords] ADD MAINTENANCE LOG RECORD Fail',
	UPDATE_MAINTENANCE_LOG_RECORD_START: '[MaintenanceLogRecords] UPDATE MAINTENANCE LOG RECORD Start',
	UPDATE_MAINTENANCE_LOG_RECORD_SUCCESS: '[MaintenanceLogRecords] UPDATE MAINTENANCE LOG RECORD Success',
	UPDATE_MAINTENANCE_LOG_RECORD_FAIL: '[MaintenanceLogRecords] UPDATE MAINTENANCE LOG RECORD Fail',
	DELETE_MAINTENANCE_LOG_RECORD_START: '[MaintenanceLogRecords] DELETE MAINTENANCE LOG RECORD Start',
	DELETE_MAINTENANCE_LOG_RECORD_SUCCESS: '[MaintenanceLogRecords] DELETE MAINTENANCE LOG RECORD Success',
	DELETE_MAINTENANCE_LOG_RECORD_FAIL: '[MaintenanceLogRecords] DELETE MAINTENANCE LOG RECORD Fail',
	TOGGLE_MODAL: '[MaintenanceLogRecords] TOGGLE MODAL',
});

const getAllMaintenanceLogRecordsStartAction = () => ({
	type: MaintenanceLogRecordsActions.GET_ALL_MAINTENANCE_LOG_RECORDS_START,
});

const getAllMaintenanceLogRecordsSuccessAction = (payload) => ({
	type: MaintenanceLogRecordsActions.GET_ALL_MAINTENANCE_LOG_RECORDS_SUCCESS,
	payload,
});

const getAllMaintenanceLogRecordsFailAction = (error) => ({
	type: MaintenanceLogRecordsActions.GET_ALL_MAINTENANCE_LOG_RECORDS_FAIL,
	error,
});

const getAllMaintenanceLogRecordsAction = (uid) => {
	return (dispatch) => {
		dispatch(getAllMaintenanceLogRecordsStartAction());

		return getAllMaintenanceLogRecords(uid)
			.then((response) => dispatch(getAllMaintenanceLogRecordsSuccessAction(response)))
			.catch((error) => dispatch(getAllMaintenanceLogRecordsFailAction(error)));
	};
};

const addMaintenanceLogRecordStartAction = () => ({
	type: MaintenanceLogRecordsActions.ADD_MAINTENANCE_LOG_RECORD_START,
});

const addMaintenanceLogRecordSuccessAction = (payload) => ({
	type: MaintenanceLogRecordsActions.ADD_MAINTENANCE_LOG_RECORD_SUCCESS,
	payload,
});

const addMaintenanceLogRecordFailAction = (error) => ({
	type: MaintenanceLogRecordsActions.ADD_MAINTENANCE_LOG_RECORD_FAIL,
	error,
});

const addMaintenanceLogRecordAction = (payload, uid) => {
	return (dispatch) => {
		dispatch(addMaintenanceLogRecordStartAction());

		const { date, ...values } = payload; // removing date string

		const payloadWithDateObject = {
			date: new Date(date), // making date string a date object
			values,
			uid,
		};

		return addMaintenanceLogRecord(payloadWithDateObject)
			.then((response) => dispatch(addMaintenanceLogRecordSuccessAction(response)))
			.catch((error) => dispatch(addMaintenanceLogRecordFailAction(error)));
	};
};

const updateMaintenanceLogRecordStartAction = () => ({
	type: MaintenanceLogRecordsActions.UPDATE_MAINTENANCE_LOG_RECORD_START,
});

const updateMaintenanceLogRecordSuccessAction = (payload) => ({
	type: MaintenanceLogRecordsActions.UPDATE_MAINTENANCE_LOG_RECORD_SUCCESS,
	payload,
});

const updateMaintenanceLogRecordFailAction = (error) => ({
	type: MaintenanceLogRecordsActions.UPDATE_MAINTENANCE_LOG_RECORD_FAIL,
	error,
});

const updateMaintenanceLogRecordAction = (payload, id) => {
	return (dispatch) => {
		dispatch(updateMaintenanceLogRecordStartAction());

		const { date, ...values } = payload; // removing date string

		const payloadWithDateObject = {
			date: new Date(date), // making date string a date object
			values,
		};

		const responsePayload = {
			...payloadWithDateObject,
			id,
		};

		return updateMaintenanceLogRecord(payloadWithDateObject, id)
			.then(() => dispatch(updateMaintenanceLogRecordSuccessAction(responsePayload)))
			.catch((error) => dispatch(updateMaintenanceLogRecordFailAction(error)));
	};
};

const deleteMaintenanceLogRecordStartAction = () => ({
	type: MaintenanceLogRecordsActions.DELETE_MAINTENANCE_LOG_RECORD_START,
});

const deleteMaintenanceLogRecordSuccessAction = (payload) => ({
	type: MaintenanceLogRecordsActions.DELETE_MAINTENANCE_LOG_RECORD_SUCCESS,
	payload,
});

const deleteMaintenanceLogRecordFailAction = (error) => ({
	type: MaintenanceLogRecordsActions.DELETE_MAINTENANCE_LOG_RECORD_FAIL,
	error,
});

const deleteMaintenanceLogRecordAction = (id) => {
	return (dispatch) => {
		dispatch(deleteMaintenanceLogRecordStartAction());

		return deleteMaintenanceLogRecord(id)
			.then(() => dispatch(deleteMaintenanceLogRecordSuccessAction(id)))
			.catch((error) => dispatch(deleteMaintenanceLogRecordFailAction(error)));
	};
};

const toggleModalAction = (payload) => ({
	type: MaintenanceLogRecordsActions.TOGGLE_MODAL,
	payload
});

export {
	MaintenanceLogRecordsActions,
	getAllMaintenanceLogRecordsStartAction,
	getAllMaintenanceLogRecordsSuccessAction,
	getAllMaintenanceLogRecordsFailAction,
	getAllMaintenanceLogRecordsAction,
	addMaintenanceLogRecordStartAction,
	addMaintenanceLogRecordSuccessAction,
	addMaintenanceLogRecordFailAction,
	addMaintenanceLogRecordAction,
	updateMaintenanceLogRecordStartAction,
	updateMaintenanceLogRecordSuccessAction,
	updateMaintenanceLogRecordFailAction,
	updateMaintenanceLogRecordAction,
	deleteMaintenanceLogRecordStartAction,
	deleteMaintenanceLogRecordSuccessAction,
	deleteMaintenanceLogRecordFailAction,
	deleteMaintenanceLogRecordAction,
	toggleModalAction,
};
