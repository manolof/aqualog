import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AuthenticationModel } from '../models/auth';

function requireAuth(WrappedComponent) {
	class AuthenticationComponent extends Component {
		componentDidMount() {
			const { authenticationInitialCheckComplete, authenticated } = this.props.auth;

			if (authenticationInitialCheckComplete && !authenticated) {
				this.context.router.history.push('/');
			}
		}

		componentDidUpdate(prevProps) {
			const { authenticated } = this.props.auth;

			if (authenticated !== prevProps.auth.authenticated && !authenticated) {
				this.context.router.history.push('/');
			}
		}

		render() {
			const { authenticationInitialCheckComplete, authenticated } = this.props.auth;

			if (authenticationInitialCheckComplete && authenticated) {
				return <WrappedComponent {...this.props} />;
			}
			return null;
		}
	}

	AuthenticationComponent.propTypes = {
		auth: AuthenticationModel.isRequired,
	};

	AuthenticationComponent.contextTypes = {
		router: PropTypes.shape({
			history: PropTypes.object.isRequired,
		}),
	};

	const mapStateToProps = (state) => ({
		auth: state.auth,
	});

	return connect(mapStateToProps)(AuthenticationComponent);
}

export {
	requireAuth,
};
