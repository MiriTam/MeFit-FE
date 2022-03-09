export function storageSave(key, value) {
	sessionStorage.setItem(key, JSON.stringify(value));
}

export function storageRead(key) {
	const data = sessionStorage.getItem(key);
	const parsedData = JSON.parse(data);

	return parsedData;
}
