import { firebaseAuth, provider, usersCollection } from '../config/firebase';

export const getAuthUser = () => {
	return new Promise((resolve, reject) => {
		firebaseAuth.onAuthStateChanged((user, error) => {
			if (error) {
				reject(error);
			}

			if (user) {
				resolve(user);
			}
			else {
				reject(false);
			}
		});
	});
};

export const signIn = () => {
	return firebaseAuth.signInWithPopup(provider)
		.then((response) => response.user);
};

export const updateUserData = (userData) => {
	const { uid, email } = userData;

	return usersCollection.doc(`${userData.uid}`).set({
		uid,
		email,
	}, { merge: true });
};

export const signOut = () => {
	return firebaseAuth.signOut();
};
