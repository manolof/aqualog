import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: '',
	authDomain: '',
	databaseURL: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
};

const app = firebase.initializeApp(config);

const firestore = firebase.firestore(app);
firestore.settings({
	timestampsInSnapshots: true,
});

const measurementsCollection = firestore.collection('measurements');
const measurementLimitsCollection = firestore.collection('measurement-limits');
const maintenanceCollection = firestore.collection('maintenance');
const usersCollection = firestore.collection('users');
const firebaseAuth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
	measurementsCollection,
	measurementLimitsCollection,
	maintenanceCollection,
	usersCollection,
	firebaseAuth,
	provider,
};
