import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import {
	deleteMaintenanceLogRecordAction,
	getAllMaintenanceLogRecordsAction,
	addMaintenanceLogRecordAction,
	updateMaintenanceLogRecordAction,
	toggleModalAction,
} from '../../actions/maintenance';
import { MaintenanceLogRecordFormComponent } from '../../components/maintenance-form/maintenance-form';
import { MaintenanceLogRecordListComponent } from '../../components/maintenance-list/maintenance-list';
import { AuthenticationModel } from '../../models/auth';
import { MaintenanceLogRecordsModel } from '../../models/maintenance';
import { ModalComponent } from '../../shared/modal';

class MaintenanceLogRecordsContainer extends Component {
	modalOpen(maintenanceLogRecord = {}) {
		this.props.toggleModalAction({
			open: true,
			tempItemValues: maintenanceLogRecord,
		});
	}

	modalClose() {
		this.props.toggleModalAction({
			open: false,
			tempItemValues: {},
		});
	}

	maintenanceLogRecordSubmitFormHandler(values) {
		const { auth, addMaintenanceLogRecord, updateMaintenanceLogRecord, maintenanceLogRecordsState } = this.props;

		const editMaintenanceLogRecordValues = maintenanceLogRecordsState.modal.tempItemValues;

		if (editMaintenanceLogRecordValues && editMaintenanceLogRecordValues.id) { // a.k.a. editing
			updateMaintenanceLogRecord(values, editMaintenanceLogRecordValues.id);
		}
		else {
			addMaintenanceLogRecord(values, auth.user.uid);
		}

		this.modalClose();
	}

	componentDidMount() {
		const { auth, getAllMaintenanceLogRecords } = this.props;

		getAllMaintenanceLogRecords(auth.user.uid);
	}

	render() {
		const { maintenanceLogRecordsState, deleteMaintenanceLogRecord } = this.props;

		return (
			<Fragment>
				<h4 className='subtitle'>
					Maintenance
				</h4>

				{
					maintenanceLogRecordsState.loading
						? (
							<p>Loading Data...</p>
						)
						: (
							<Fragment>
								<MaintenanceLogRecordListComponent
									state={maintenanceLogRecordsState}
									onRowDelete={deleteMaintenanceLogRecord}
									onRowEdit={(maintenanceLogRecord) => this.modalOpen(maintenanceLogRecord)}
								/>

								<button
									className='button is-link'
									onClick={() => this.modalOpen()}
								>
									Add new
								</button>

								{
									maintenanceLogRecordsState.modal.open && (
										<ModalComponent
											modalState={maintenanceLogRecordsState.modal}
											modalCloseHandler={() => this.modalClose()}
										>
											<MaintenanceLogRecordFormComponent
												modalState={maintenanceLogRecordsState.modal}
												onFormSubmit={(v) => this.maintenanceLogRecordSubmitFormHandler(v)}
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

MaintenanceLogRecordsContainer.propTypes = {
	maintenanceLogRecordsState: MaintenanceLogRecordsModel.isRequired,
	auth: AuthenticationModel.isRequired,
	getAllMaintenanceLogRecords: PropTypes.func.isRequired,
	deleteMaintenanceLogRecord: PropTypes.func.isRequired,
	addMaintenanceLogRecord: PropTypes.func.isRequired,
	updateMaintenanceLogRecord: PropTypes.func.isRequired,
	toggleModalAction: PropTypes.func.isRequired,
};

// istanbul ignore next
const mapStateToProps = (state) => ({
	maintenanceLogRecordsState: state.maintenance,
	auth: state.auth,
});

// istanbul ignore next
const mapDispatchToProps = (dispatch) => ({
	getAllMaintenanceLogRecords: (uid) => dispatch(getAllMaintenanceLogRecordsAction(uid)),
	deleteMaintenanceLogRecord: (id) => dispatch(deleteMaintenanceLogRecordAction(id)),
	addMaintenanceLogRecord: (values, uid) => dispatch(addMaintenanceLogRecordAction(values, uid)),
	updateMaintenanceLogRecord: (values, id) => dispatch(updateMaintenanceLogRecordAction(values, id)),
	toggleModalAction: (state) => dispatch(toggleModalAction(state)),
});

const MaintenanceLogRecordsContainerConnect = connect(mapStateToProps, mapDispatchToProps)(MaintenanceLogRecordsContainer);

export {
	MaintenanceLogRecordsContainer,
	MaintenanceLogRecordsContainerConnect,
};
