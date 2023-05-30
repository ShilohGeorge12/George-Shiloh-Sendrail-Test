const express = require('express');
const app = express();
const products = require('./products');
const accessOrigin = require('./middleware/accessControl');
const Search = require( './utils/search' );

app.use(accessOrigin);
app.use(express.static('images'));

app.get('/api/v1/products', (req, res) => {
	let newProducts = products;
	const { search, by } = req.query;
	if (search && by) {
		newProducts = Search(products, search, by);
	}
	if (newProducts.length === 0 || newProducts === 'Not Found') {
		return res.status(404).json({ success: true, error: 'Not Found' });
	}
	return res.json({ success: true, data: newProducts, nbHits: newProducts.length });
});

app.listen(5000, () => {
	console.log('listening on port 5000');
});
