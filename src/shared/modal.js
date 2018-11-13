import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { MeasurementsModalModel } from '../models/measurements';
import { formatDate } from './helpers';

class ModalComponent extends Component {
	render() {
		const { modalCloseHandler, modalState, ...props } = this.props;

		const modalClass = `modal ${modalState.open ? 'is-active' : ''}`;

		const modalTitle = modalState.tempItemValues.id
			? 'Edit record from ' + formatDate(modalState.tempItemValues.date, `MMM DD 'YY`)
			: 'New record';

		return (
			<div className={modalClass}>
				<div className='modal-background'/>
				<div className='modal-card'>
					<header className='modal-card-head'>
						<p className='modal-card-title'>{modalTitle}</p>
						<button className='delete' aria-label='close' onClick={modalCloseHandler}/>
					</header>
					<section className='modal-card-body'>
						{props.children}
					</section>
				</div>
			</div>
		);
	}
}

ModalComponent.propTypes = {
	modalState: MeasurementsModalModel.isRequired,
	modalCloseHandler: PropTypes.func.isRequired,
};

export {
	ModalComponent,
};
