import PropTypes from 'prop-types';

export const MaintenanceLogRecordModel = PropTypes.shape({
	id: PropTypes.string,
	uid: PropTypes.string,
	date: PropTypes.instanceOf(Date),
	values: PropTypes.shape({
		description: PropTypes.string,

		// TODO maybe different structure
	}),
});

export const MaintenanceLogRecordsModalModel = PropTypes.shape({
	open: PropTypes.bool,
	tempItemValues: MaintenanceLogRecordModel,
});

export const MaintenanceLogRecordsModel = PropTypes.shape({
	loading: PropTypes.bool,
	items: PropTypes.arrayOf(MaintenanceLogRecordModel),
	modal: MaintenanceLogRecordsModalModel,
});
