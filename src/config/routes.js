import { MaintenanceLogRecordsContainerConnect } from '../containers/maintenance/maintenance';
import { MeasurementsContainerConnect } from '../containers/measurements/measurements';
import { SignInContainerConnect } from '../containers/signin/signin';
import { requireAuth } from '../hoc/auth';

const routes = [
	{
		path: '/',
		component: SignInContainerConnect,
	},
	{
		path: '/measurements',
		title: 'Measurements',
		component: requireAuth(MeasurementsContainerConnect),
	},
	{
		path: '/maintenance',
		title: 'Maintenance',
		component: requireAuth(MaintenanceLogRecordsContainerConnect),
	},
];

export {
	routes,
};
