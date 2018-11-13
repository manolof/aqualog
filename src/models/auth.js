import PropTypes from 'prop-types';

export const AuthenticationModel = PropTypes.shape({
	authenticated: PropTypes.bool,
	loading: PropTypes.bool,
	user: PropTypes.object,
});
