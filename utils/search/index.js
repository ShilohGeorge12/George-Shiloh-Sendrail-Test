function Search(array, target, by) {
	const search = (array, target, by, start, end) => {
		let By = 'name';
		if (by === 'region') By = 'region';
		if (by === 'status') By = 'status';
		if (by === 'contact') By = 'contact';

		if (start > end) return 'Not Found';
    
		const middle = Math.ceil((start + end) / 2);
    const arr = array[middle][By].toLowerCase();
    const val = target.toLowerCase()

		if (arr.toLowerCase() === val || arr.includes(val)) {
			return [ array[middle] ];
		}

		if (target < array[middle][By]) {
			return search(array, target, by, start, middle - 1);
		}

		return search(array, target, by, middle + 1, end);
	};

	return search(array, target, by, 0, array.length - 1);
}

module.exports = Search;
