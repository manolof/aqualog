import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { MeasurementsModalModel } from '../../models/measurements';
import { formatDate, formatStringToNumber } from '../../shared/helpers';
import { FormField } from '../../shared/input';

class MeasurementFormComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: formatDate(),
			ph: '',
			nh3: '',
			no2: '',
			no3: '',
			kh: '',
			gh: '',
			cl2: '',
		};
	}

	componentDidMount() {
		const { tempItemValues } = this.props.modalState;
		const values = tempItemValues.values;
		const date = tempItemValues.date;

		if (values) {
			this.setState({
				...values,
				date: formatDate(date),
			});
		}
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		const { date, ph, nh3, no2, no3, kh, gh, cl2 } = this.state;

		const values = {
			date,
			ph: formatStringToNumber(ph),
			nh3: formatStringToNumber(nh3),
			no2: formatStringToNumber(no2),
			no3: formatStringToNumber(no3),
			kh: formatStringToNumber(kh),
			gh: formatStringToNumber(gh),
			cl2: formatStringToNumber(cl2),
		};

		this.props.onFormSubmit(values);
	}

	render() {
		return (
			<form onSubmit={(e) => this.handleSubmit(e)}>
				<FormField label='Date'>
					<input
						required
						className='input'
						type='date'
						name='date'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.date}
					/>
				</FormField>

				<FormField label='pH'>
					<input
						className='input'
						type='number'
						step='0.01'
						name='ph'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.ph}
					/>
				</FormField>

				<FormField label='NH3'>
					<input
						className='input'
						type='number'
						step='0.01'
						name='nh3'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.nh3}
					/>
				</FormField>

				<FormField label='NO2'>
					<input
						className='input'
						type='number'
						step='0.01'
						name='no2'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.no2}
					/>

				</FormField>

				<FormField label='NO3'>
					<input
						className='input'
						type='number'
						step='0.01'
						name='no3'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.no3}
					/>
				</FormField>

				<FormField label='KH'>
					<input
						className='input'
						type='number'
						step='0.01'
						name='kh'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.kh}
					/>
				</FormField>

				<FormField label='GH'>
					<input
						className='input'
						type='number'
						step='0.01'
						name='gh'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.gh}
					/>
				</FormField>

				<FormField label='CL2'>
					<input
						className='input'
						type='number'
						step='0.01'
						name='cl2'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.cl2}
					/>
				</FormField>

				<div className='field is-horizontal'>
					<div className='field-label'></div>
					<div className='field-body'>
						<div className='field'>
							<div className='control'>
								<button className='button is-primary'>Submit</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

MeasurementFormComponent.propTypes = {
	modalState: MeasurementsModalModel.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
};

export {
	MeasurementFormComponent,
};
