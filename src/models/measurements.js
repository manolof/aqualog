import PropTypes from 'prop-types';

export const MeasurementModel = PropTypes.shape({
	id: PropTypes.string,
	date: PropTypes.instanceOf(Date),
	values: PropTypes.shape({
		ph: PropTypes.number,
		nh3: PropTypes.number,
		no2: PropTypes.number,
		no3: PropTypes.number,
		kh: PropTypes.number,
		gh: PropTypes.number,
		cl2: PropTypes.number,
	}),
});

export const MeasurementLimitsMinMax = PropTypes.shape({
	min: PropTypes.number,
	max: PropTypes.number,
});

export const MeasurementLimitsModel = PropTypes.shape({
	id: PropTypes.string,
	values: PropTypes.shape({
		ph: MeasurementLimitsMinMax,
		nh3: MeasurementLimitsMinMax,
		no2: MeasurementLimitsMinMax,
		no3: MeasurementLimitsMinMax,
		kh: MeasurementLimitsMinMax,
		gh: MeasurementLimitsMinMax,
		cl2: MeasurementLimitsMinMax,
	}),
});

export const MeasurementsModalModel = PropTypes.shape({
	open: PropTypes.bool,
	id: PropTypes.oneOf(['measurement', 'measurementLimits']),
	tempItemValues: PropTypes.oneOfType([MeasurementModel, MeasurementLimitsModel]),
});

export const MeasurementsModel = PropTypes.shape({
	loading: PropTypes.bool,
	items: PropTypes.arrayOf(MeasurementModel),
	limits: PropTypes.arrayOf(MeasurementLimitsModel),
	modal: MeasurementsModalModel,
});
