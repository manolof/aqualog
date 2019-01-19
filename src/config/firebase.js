import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
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
