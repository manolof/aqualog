import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signInAction } from '../../actions/auth';
import { AuthenticationModel } from '../../models/auth';

class SignInContainer extends Component {
	componentDidMount() {
		const { authenticationInitialCheckComplete, authenticated } = this.props.auth;

		if (authenticationInitialCheckComplete && authenticated) {
			this.context.router.history.push('/measurements');
		}
	}

	render() {
		const { signIn } = this.props;

		return (
			<button className='button is-primary' onClick={signIn}>
				Sign In With Google
			</button>
		);
	}
}

SignInContainer.propTypes = {
	auth: AuthenticationModel.isRequired,
	signIn: PropTypes.func.isRequired,
};

SignInContainer.contextTypes = {
	router: PropTypes.shape({
		history: PropTypes.object.isRequired,
	}),
};

// istanbul ignore next
const mapStateToProps = (state) => ({
	auth: state.auth,
});

// istanbul ignore next
const mapDispatchToProps = (dispatch) => ({
	signIn: () => dispatch(signInAction()),
});

const SignInContainerConnect = connect(mapStateToProps, mapDispatchToProps)(SignInContainer);

export {
	SignInContainer,
	SignInContainerConnect,
};
