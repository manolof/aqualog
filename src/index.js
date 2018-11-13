import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';

import { configureStore } from './configureStore';
import { AppContainerConnect } from './containers/app/app';
import { registerServiceWorker } from './registerServiceWorker';

const store = configureStore();

render(
	<Provider store={store}>
		<AppContainerConnect/>
	</Provider>,
	document.getElementById('root'),
);

registerServiceWorker();
