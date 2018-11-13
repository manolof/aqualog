import { measurementLimitsCollection, measurementsCollection } from '../config/firebase';

export const getAllMeasurements = (uid) => {
	return measurementsCollection
		.where('uid', '==', uid)
		.orderBy('date')
		.get()
		.then((querySnapshot) => {
			return querySnapshot.docs.map((doc) => {
				const data = doc.data(); // {date, values}
				const { date, values } = data;

				const dateObj = date.toDate();

				return {
					id: doc.id,
					date: dateObj,
					values,
				};
			});
		});
};

export const addMeasurement = (payload, uid) => {
	const { date, ...values } = payload; // removing date string

	const payloadWithDateObject = {
		date: new Date(date), // making date string a date object
		values,
		uid,
	};

	return measurementsCollection.add(payloadWithDateObject)
		.then((doc) => {
			return {
				id: doc.id,
				...payloadWithDateObject,
			};
		});
};

export const updateMeasurement = (payload, docId) => {
	const { date, ...values } = payload; // removing date string

	const payloadWithDateObject = {
		date: new Date(date), // making date string a date object
		values,
	};

	const responsePayload = {
		...payloadWithDateObject,
		id: docId,
	};

	return measurementsCollection.doc(docId).update(payloadWithDateObject)
		.then(() => responsePayload);
};

export const getMeasurementLimits = (uid) => {
	return measurementLimitsCollection
		.where('uid', '==', uid)
		.get()
		.then((querySnapshot) => {
			return querySnapshot.docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data(),
				};
			});
		});
};

export const addMeasurementLimits = (payload, uid) => {
	const payloadWithUid = {
		values: payload,
		uid,
	};

	return measurementLimitsCollection.add(payloadWithUid)
		.then((doc) => {
			return {
				id: doc.id,
				...payloadWithUid,
			};
		});
};

export const updateMeasurementLimits = (payload, docId) => {

	const payloadWithValuesObject = {
		values: payload,
	};

	const responsePayload = {
		...payloadWithValuesObject,
		id: docId,
	};

	return measurementLimitsCollection.doc(docId).update(payloadWithValuesObject)
		.then(() => responsePayload);
};

export const deleteMeasurement = (docId) => {
	return measurementsCollection.doc(docId).delete();
};
