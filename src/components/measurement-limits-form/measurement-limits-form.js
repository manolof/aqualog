import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { MeasurementsModalModel } from '../../models/measurements';
import { formatStringToNumber } from '../../shared/helpers';
import { FormField } from '../../shared/input';

class MeasurementLimitsFormComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ph: {
				min: '',
				max: '',
			},
			nh3: {
				min: '',
				max: '',
			},
			no2: {
				min: '',
				max: '',
			},
			no3: {
				min: '',
				max: '',
			},
			kh: {
				min: '',
				max: '',
			},
			gh: {
				min: '',
				max: '',
			},
			cl2: {
				min: '',
				max: '',
			},
		};
	}

	componentDidMount() {
		const { tempItemValues } = this.props.modalState;
		const values = tempItemValues.values;

		if (values) {
			this.setState(values);
		}
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name.split(',');

		this.setState({
			[name[0]]: {
				...this.state[name[0]],
				[name[1]]: value,
			},
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		const { ph, nh3, no2, no3, kh, gh, cl2 } = this.state;

		const values = {
			ph: {
				min: formatStringToNumber(ph.min),
				max: formatStringToNumber(ph.max),
			},
			nh3: {
				min: formatStringToNumber(nh3.min),
				max: formatStringToNumber(nh3.max),
			},
			no2: {
				min: formatStringToNumber(no2.min),
				max: formatStringToNumber(no2.max),
			},
			no3: {
				min: formatStringToNumber(no3.min),
				max: formatStringToNumber(no3.max),
			},
			kh: {
				min: formatStringToNumber(kh.min),
				max: formatStringToNumber(kh.max),
			},
			gh: {
				min: formatStringToNumber(gh.min),
				max: formatStringToNumber(gh.max),
			},
			cl2: {
				min: formatStringToNumber(cl2.min),
				max: formatStringToNumber(cl2.max),
			},
		};

		this.props.onFormSubmit(values);
	}

	render() {
		return (
			<form onSubmit={(e) => this.handleSubmit(e)}>
				<FormField label='pH'>
					<input
						className='input'
						type='number'
						step='0.01'
						name='ph,min'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.ph.min}
					/>
					<input
						className='input'
						type='number'
						step='0.01'
						name='ph,max'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.ph.max}
					/>
				</FormField>

				<FormField label='NH3'>
					<input
						className='input'
						type='number'
						step='0.01'
						name='nh3,min'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.nh3.min}
					/>
					<input
						className='input'
						type='number'
						step='0.01'
						name='nh3,max'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.nh3.max}
					/>
				</FormField>

				<FormField label='NO2'>
					<input
						className='input'
						type='number'
						step='0.01'
						name='no2,min'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.no2.min}/>
					<input
						className='input'
						type='number'
						step='0.01'
						name='no2,max'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.no2.max}/>
				</FormField>

				<FormField label='NO3'>
					<input
						className='input'
						type='number'
						step='0.01'
						name='no3,min'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.no3.min}/>
					<input
						className='input'
						type='number'
						step='0.01'
						name='no3,max'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.no3.max}/>
				</FormField>

				<FormField label='KH'>
					<input
						className='input'
						type='number'
						step='0.01'
						name='kh,min'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.kh.min}/>
					<input
						className='input'
						type='number'
						step='0.01'
						name='kh,max'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.kh.max}/>
				</FormField>

				<FormField label='GH'>
					<input
						className='input'
						type='number'
						step='0.01'
						name='gh,min'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.gh.min}/>
					<input
						className='input'
						type='number'
						step='0.01'
						name='gh,max'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.gh.max}/>
				</FormField>

				<FormField label='CL2'>
					<input
						className='input'
						type='number'
						step='0.01'
						name='cl2,min'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.cl2.min}/>
					<input
						className='input'
						type='number'
						step='0.01'
						name='cl2,max'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.cl2.max}/>
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

MeasurementLimitsFormComponent.propTypes = {
	modalState: MeasurementsModalModel.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
};

export {
	MeasurementLimitsFormComponent,
};
