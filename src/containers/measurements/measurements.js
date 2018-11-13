import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import {
	deleteMeasurementAction,
	getAllMeasurementsAction,
	addMeasurementAction,
	updateMeasurementAction,
	toggleModalAction,
	getMeasurementLimitsAction,
	addMeasurementLimitsAction,
	updateMeasurementLimitsAction,
} from '../../actions/measurements';
import { MeasurementChartsComponent } from '../../components/measurement-charts/measurement-charts';
import { MeasurementFormComponent } from '../../components/measurement-form/measurement-form';
import { MeasurementLimitsFormComponent } from '../../components/measurement-limits-form/measurement-limits-form';
import { MeasurementLimitsListComponent } from '../../components/measurement-limits-list/measurement-limits-list';
import { MeasurementListComponent } from '../../components/measurement-list/measurement-list';
import { AuthenticationModel } from '../../models/auth';
import { MeasurementsModel } from '../../models/measurements';
import { ModalComponent } from '../../shared/modal';

class MeasurementsContainer extends Component {
	modalOpen(id, measurement = {}) {
		this.props.toggleModalAction({
			id,
			open: true,
			tempItemValues: measurement,
		});
	}

	modalClose() {
		this.props.toggleModalAction({
			open: false,
			tempItemValues: {},
		});
	}

	measurementSubmitFormHandler(values) {
		const { auth, addMeasurement, updateMeasurement, measurementsState } = this.props;

		const editMeasurementValues = measurementsState.modal.tempItemValues;

		if (editMeasurementValues && editMeasurementValues.id) { // a.k.a. editing
			updateMeasurement(values, editMeasurementValues.id);
		}
		else {
			addMeasurement(values, auth.user.uid);
		}

		this.modalClose();
	}

	measurementLimitsSubmitFormHandler(values) {
		const { auth, addMeasurementLimits, updateMeasurementLimits, measurementsState } = this.props;

		const editMeasurementValues = measurementsState.modal.tempItemValues;

		if (editMeasurementValues && editMeasurementValues.id) { // a.k.a. editing
			updateMeasurementLimits(values, editMeasurementValues.id);
		}
		else {
			addMeasurementLimits(values, auth.user.uid);
		}

		this.modalClose();
	}

	componentDidMount() {
		const { auth, getAllMeasurements, getMeasurementLimits } = this.props;

		getAllMeasurements(auth.user.uid);
		getMeasurementLimits(auth.user.uid);
	}

	render() {
		const { measurementsState, deleteMeasurement } = this.props;

		return (
			<Fragment>
				<h4 className='subtitle'>
					Measurements
				</h4>

				{
					measurementsState.loading
						? (
							<p>Loading Data...</p>
						)
						: (
							<Fragment>
								<MeasurementChartsComponent
									state={measurementsState}
								/>

								<MeasurementListComponent
									state={measurementsState}
									onRowDelete={deleteMeasurement}
									onRowEdit={(measurement) => this.modalOpen('measurement', measurement)}
								/>

								<button
									className='button is-link'
									onClick={() => this.modalOpen('measurement')}
								>
									Add measurement
								</button>

								<MeasurementLimitsListComponent
									items={measurementsState.limits}
									onRowEdit={(measurement) => this.modalOpen('measurementLimits', measurement)}
								/>

								{
									!measurementsState.limits.length && (
										<button
											className='button is-link'
											onClick={() => this.modalOpen('measurementLimits')}
										>
											Add measurement limits
										</button>
									)
								}

								{
									measurementsState.modal.id === 'measurement' &&
									measurementsState.modal.open && (
										<ModalComponent
											modalState={measurementsState.modal}
											modalCloseHandler={() => this.modalClose()}
										>
											<MeasurementFormComponent
												modalState={measurementsState.modal}
												onFormSubmit={(v) => this.measurementSubmitFormHandler(v)}
											/>
										</ModalComponent>
									)
								}

								{
									measurementsState.modal.id === 'measurementLimits' &&
									measurementsState.modal.open && (
										<ModalComponent
											modalState={measurementsState.modal}
											modalCloseHandler={() => this.modalClose()}
										>
											<MeasurementLimitsFormComponent
												modalState={measurementsState.modal}
												onFormSubmit={(v) => this.measurementLimitsSubmitFormHandler(v)}
											/>
										</ModalComponent>
									)
								}
							</Fragment>
						)
				}
			</Fragment>
		);
	}
}

MeasurementsContainer.propTypes = {
	measurementsState: MeasurementsModel.isRequired,
	auth: AuthenticationModel.isRequired,
	getAllMeasurements: PropTypes.func.isRequired,
	getMeasurementLimits: PropTypes.func.isRequired,
	deleteMeasurement: PropTypes.func.isRequired,
	addMeasurement: PropTypes.func.isRequired,
	addMeasurementLimits: PropTypes.func.isRequired,
	updateMeasurement: PropTypes.func.isRequired,
	updateMeasurementLimits: PropTypes.func.isRequired,
	toggleModalAction: PropTypes.func.isRequired,
};

// istanbul ignore next
const mapStateToProps = (state) => ({
	measurementsState: state.measurements,
	auth: state.auth,
});

// istanbul ignore next
const mapDispatchToProps = (dispatch) => ({
	getAllMeasurements: (uid) => dispatch(getAllMeasurementsAction(uid)),
	getMeasurementLimits: (uid) => dispatch(getMeasurementLimitsAction(uid)),
	deleteMeasurement: (id) => dispatch(deleteMeasurementAction(id)),
	addMeasurement: (values, uid) => dispatch(addMeasurementAction(values, uid)),
	addMeasurementLimits: (values, uid) => dispatch(addMeasurementLimitsAction(values, uid)),
	updateMeasurement: (values, id) => dispatch(updateMeasurementAction(values, id)),
	updateMeasurementLimits: (values, id) => dispatch(updateMeasurementLimitsAction(values, id)),
	toggleModalAction: (state) => dispatch(toggleModalAction(state)),
});

const MeasurementsContainerConnect = connect(mapStateToProps, mapDispatchToProps)(MeasurementsContainer);

export {
	MeasurementsContainer,
	MeasurementsContainerConnect,
};
