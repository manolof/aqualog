import { AuthenticationActions } from '../actions/auth';
import { MaintenanceLogRecordsActions } from '../actions/maintenance';

export const initialState = {
	loading: false,
	items: [],
	modal: {
		open: false,
		tempItemValues: {},
	},
};

const maintenanceLogRecordsReducer = (state = initialState, action) => {
	const payload = action.payload;

	switch (action.type) {
		case MaintenanceLogRecordsActions.GET_ALL_MAINTENANCE_LOG_RECORDS_START:
			return {
				...state,
				loading: true,
			};

		case MaintenanceLogRecordsActions.GET_ALL_MAINTENANCE_LOG_RECORDS_SUCCESS:
			return {
				...state,
				loading: false,
				items: payload,
			};

		case MaintenanceLogRecordsActions.GET_ALL_MAINTENANCE_LOG_RECORDS_FAIL:
			return {
				...state,
				loading: false,
			};

		case MaintenanceLogRecordsActions.ADD_MAINTENANCE_LOG_RECORD_SUCCESS:
			return {
				...state,
				items: [
					...state.items,
					payload,
				],
			};

		case MaintenanceLogRecordsActions.UPDATE_MAINTENANCE_LOG_RECORD_SUCCESS:
			const updatedMaintenanceLogRecords = state.items
				.map((maintenanceLogRecord) => {
					if (maintenanceLogRecord.id !== payload.id) {
						return maintenanceLogRecord;
					}

					return {
						...maintenanceLogRecord,
						date: payload.date,
						values: payload.values,
					};
				});

			return {
				...state,
				items: updatedMaintenanceLogRecords,
			};

		case MaintenanceLogRecordsActions.DELETE_MAINTENANCE_LOG_RECORD_SUCCESS:
			return {
				...state,
				items: state.items.filter((maintenanceLogRecord) => maintenanceLogRecord.id !== payload),
			};

		case MaintenanceLogRecordsActions.TOGGLE_MODAL:
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
	maintenanceLogRecordsReducer,
};
