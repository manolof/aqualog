import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

import { MeasurementLimitsModel } from '../../models/measurements';

class MeasurementLimitsListComponent extends Component {
	renderRow(itemValue) {
		return (
			<td>
				<div className='columns'>
					<div className='column'>
						min: {itemValue.min}
					</div>
					<div className='column'>
						max: {itemValue.max}
					</div>
				</div>
			</td>
		);
	}

	render() {
		const { items, onRowEdit } = this.props;

		return (
			<Fragment>
				<table className='table is-striped is-bordered is-fullwidth is-narrow'>
					<thead>
						<tr>
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
							items && items.length
								? items.map((item) =>
									<tr key={item.id}>
										{this.renderRow(item.values.ph)}
										{this.renderRow(item.values.nh3)}
										{this.renderRow(item.values.no2)}
										{this.renderRow(item.values.no3)}
										{this.renderRow(item.values.kh)}
										{this.renderRow(item.values.gh)}
										{this.renderRow(item.values.cl2)}
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

MeasurementLimitsListComponent.propTypes = {
	onRowEdit: PropTypes.func.isRequired,
	items: PropTypes.arrayOf(MeasurementLimitsModel).isRequired,
};

export {
	MeasurementLimitsListComponent,
};
