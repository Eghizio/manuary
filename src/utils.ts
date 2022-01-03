export const generateID = () => "_" + Math.random().toString(36).substring(2, 9);

export const getMonthName = (monthIndex: number) => {
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const outOfBounds = monthIndex < 0 || monthIndex >= monthNames.length;
	return outOfBounds ? "" : monthNames[monthIndex];
};

export const parseDate = (date: Date, includeTime = true, shortMonth = true) => {
	const day = date.getDate();
	const monthName = getMonthName(date.getMonth());
	const month = shortMonth ? monthName.slice(0, 3) : monthName;
	const year = date.getFullYear();

	const hour = date.getHours().toString().padStart(2, "0");
	const minute = date.getMinutes().toString().padStart(2, "0");

	const isThisYear = new Date().getFullYear() === year;

	const parsedDate = isThisYear ? `${month} ${day}` : `${year} ${month} ${day}`;
	const time = `${hour}:${minute}`;

	return includeTime ? `${parsedDate} ${time} ` : parsedDate;
};
