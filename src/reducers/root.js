import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { maintenanceLogRecordsReducer } from './maintenance';
import { measurementsReducer } from './measurements';

const rootReducer = combineReducers({
	auth: authReducer,
	measurements: measurementsReducer,
	maintenance: maintenanceLogRecordsReducer,
});

export {
	rootReducer,
};
