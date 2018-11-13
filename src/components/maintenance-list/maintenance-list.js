import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import { MaintenanceLogRecordsModel } from '../../models/maintenance';
import { formatDate } from '../../shared/helpers';

class MaintenanceLogRecordListComponent extends Component {
	render() {
		const { state, onRowEdit, onRowDelete } = this.props;

		return (
			<table className='table is-striped is-bordered is-fullwidth is-narrow'>
				<thead>
					<tr>
						<th>Description</th>
						<th>Date</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{
						state.items && state.items.length
							? state.items.map((item) =>
								<tr key={item.id}>
									<td>{item.values.description}</td>
									<td className='cell-fit-content'>
										{formatDate(item.date, `ddd, MMM DD 'YY`)}
									</td>
									<td className='cell-fit-content'>
										<div className='field has-addons'>
											<p className='control'>
												<button
													className='button'
													onClick={() => onRowEdit(item)}
												>
													<span className='icon'>
														<FontAwesomeIcon icon={faEdit}/>
													</span>
													<span>Edit</span>
												</button>
											</p>
											<p className='control'>
												<button
													className='button'
													onClick={() => onRowDelete(item.id)}
												>
													<span className='icon has-text-danger'>
														<FontAwesomeIcon icon={faTrashAlt}/>
													</span>
													<span>Delete</span>
												</button>
											</p>
										</div>
									</td>
								</tr>,
							)
							: (
								<tr>
									<td colSpan='10'>
										<p>No values</p>
									</td>
								</tr>
							)
					}
				</tbody>
			</table>
		);
	}
}

MaintenanceLogRecordListComponent.propTypes = {
	onRowEdit: PropTypes.func.isRequired,
	onRowDelete: PropTypes.func.isRequired,
	state: MaintenanceLogRecordsModel.isRequired,
};

export {
	MaintenanceLogRecordListComponent,
};
