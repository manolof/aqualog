import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { MaintenanceLogRecordsModalModel } from '../../models/maintenance';
import { formatDate } from '../../shared/helpers';
import { FormField } from '../../shared/input';

class MaintenanceLogRecordFormComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: formatDate(),
			description: '',
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

		const { date, description } = this.state;

		const values = {
			date,
			description,
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

				<FormField label='Description'>
					<textarea
						required
						className='textarea'
						name='description'
						onChange={(e) => this.handleInputChange(e)}
						value={this.state.description}
					></textarea>
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

MaintenanceLogRecordFormComponent.propTypes = {
	modalState: MaintenanceLogRecordsModalModel.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
};

export {
	MaintenanceLogRecordFormComponent,
};
