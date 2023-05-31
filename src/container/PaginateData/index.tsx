
const usePaginateData: TpaginateData = (riders, pageNumber, pageSize) => {
	let startIndex: number;
	if (pageNumber === 1) {
		startIndex = 0;
	} else {
		startIndex = (pageNumber - 1) * pageSize;
	}
	const result = riders.slice(startIndex, startIndex + pageSize);
	return result;
};
export default usePaginateData;
