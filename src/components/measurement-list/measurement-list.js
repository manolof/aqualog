import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import { MeasurementsModel } from '../../models/measurements';
import { formatDate } from '../../shared/helpers';

class MeasurementListComponent extends Component {
	renderRow(itemValue, key) {
		const { state } = this.props;

		const limits = state.limits && state.limits.length && state.limits[0].values;
		const classname = limits && (
			itemValue > limits[key].max || itemValue < limits[key].min
				? 'has-text-danger'
				: (itemValue === limits[key].max || itemValue === limits[key].min) && limits[key].min !== 0
					? 'has-text-warning'
					: ''
		);

		return (
			<td className={classname}>{itemValue}</td>
		);
	}

	render() {
		const { state, onRowEdit, onRowDelete } = this.props;

		return (
			<Fragment>
				<table className='table is-striped is-bordered is-fullwidth is-narrow'>
					<thead>
						<tr>
							<th>Date</th>
							<th className='tooltip' data-tooltip='Acidity or alkalinity'>pH</th>
							<th className='tooltip' data-tooltip='Ammonia'>NH3</th>
							<th className='tooltip' data-tooltip='Nitrite'>NO2</th>
							<th className='tooltip' data-tooltip='Nitrate'>NO3</th>
							<th className='tooltip' data-tooltip='Carbonate Hardness'>KH</th>
							<th className='tooltip' data-tooltip='General Hardness'>GH</th>
							<th className='tooltip' data-tooltip='Chlorine'>CL2</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{
							state.items && state.items.length
								? state.items.map((item) =>
									<tr key={item.id}>
										<td className='cell-fit-content'>
											{formatDate(item.date, `ddd, MMM DD 'YY`)}
										</td>
										{this.renderRow(item.values.ph, 'ph')}
										{this.renderRow(item.values.nh3, 'nh3')}
										{this.renderRow(item.values.no2, 'no2')}
										{this.renderRow(item.values.no3, 'no3')}
										{this.renderRow(item.values.kh, 'kh')}
										{this.renderRow(item.values.gh, 'gh')}
										{this.renderRow(item.values.cl2, 'cl2')}
										<td className='cell-fit-content'>
											<div className='field has-addons'>
												<p className='control'>
													<button
														className='button is-small'
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
														className='button is-small'
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
			</Fragment>
		);
	}
}

MeasurementListComponent.propTypes = {
	onRowEdit: PropTypes.func.isRequired,
	onRowDelete: PropTypes.func.isRequired,
	state: MeasurementsModel.isRequired,
};

export {
	MeasurementListComponent,
};
