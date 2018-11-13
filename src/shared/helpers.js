import moment from 'moment';

function formatDate(date = Date.now(), format = 'YYYY-MM-DD') {
	return moment(date).format(format);
}

function formatStringToNumber(string) {
	return isNaN(parseInt(string, 10)) ? null : parseFloat(string);
}

export {
	formatDate,
	formatStringToNumber,
};
