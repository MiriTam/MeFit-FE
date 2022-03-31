export default function filterData(query, data) {
	if (!query) return data;
	return data.filter(exercise => exercise.name.toLowerCase().includes(query.toLowerCase()));
}
