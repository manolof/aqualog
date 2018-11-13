import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from '../../config/routes';

class AppComponent extends Component {
	render() {
		return (
			<div className='section'>
				<div className='container'>
					<Switch>
						{
							routes.map((route, index) =>
								<Route exact path={route.path} component={route.component} key={index}/>
							)
						}
					</Switch>
				</div>
			</div>
		);
	}
}

export {
	AppComponent,
};
