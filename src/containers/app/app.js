import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { getAuthUserAction, signInAction, signOutAction } from '../../actions/auth';
import { AppComponent } from '../../components/app/app';
import { NavComponent } from '../../components/nav/nav';
import { AuthenticationModel } from '../../models/auth';

class AppContainer extends Component {
	componentDidMount() {
		this.props.getAuthUser();
	}

	render() {
		const { auth, signIn, signOut } = this.props;

		if (auth.loading) {
			return (
				<div>Loading...</div>
			);
		}

		return (
			<BrowserRouter>
				<Fragment>
					<NavComponent auth={auth} signIn={signIn} signOut={signOut}/>
					<AppComponent auth={auth} signOut={signOut}/>
				</Fragment>
			</BrowserRouter>
		);
	}
}

AppContainer.propTypes = {
	auth: AuthenticationModel.isRequired,
	getAuthUser: PropTypes.func.isRequired,
	signIn: PropTypes.func.isRequired,
	signOut: PropTypes.func.isRequired,
};

// istanbul ignore next
const mapStateToProps = (state) => ({
	auth: state.auth,
});

// istanbul ignore next
const mapDispatchToProps = (dispatch) => ({
	getAuthUser: () => dispatch(getAuthUserAction()),
	signIn: () => dispatch(signInAction()),
	signOut: () => dispatch(signOutAction()),
});

const AppContainerConnect = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export {
	AppContainer,
	AppContainerConnect,
};
