import PropTypes from 'prop-types';
import React, { Component } from 'react';

class FormField extends Component {
	render() {
		const { label, ...props } = this.props;

		return (
			<div className="field is-horizontal">
				<div className="field-label">
					<label className="label">{label}</label>
				</div>
				<div className="field-body">
					<div className="field">
						<div className="control">
							{props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

FormField.propTypes = {
	label: PropTypes.string.isRequired,
};

export {
	FormField,
};
