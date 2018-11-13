import { maintenanceCollection } from '../config/firebase';

export const getAllMaintenanceLogRecords = (uid) => {
	return maintenanceCollection
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

export const addMaintenanceLogRecord = (payload) => {
	return maintenanceCollection.add(payload)
		.then((doc) => {
			const { date, values, uid } = payload;

			return {
				id: doc.id,
				date,
				values,
				uid,
			};
		});
};

export const updateMaintenanceLogRecord = (payload, id) => {
	return maintenanceCollection.doc(id).update(payload);
};

export const deleteMaintenanceLogRecord = (id) => {
	return maintenanceCollection.doc(id).delete();
};
