const app = require('express')();
const products = require('./products');
const accessOrigin = require('./middleware/accessControl');
const Search = require( './utils/search' );
app.use(accessOrigin);

app.get('/api/v1/products', (req, res) => {
	let newProducts = products;
	const { search } = req.query;
	if (search) {
		newProducts = Search(products, 'Dan Abrahmov', 'status')
		console.log(search);
	}
	if (newProducts.length === 0) {
		return res.json({ success: true, data: [] });
	}
	return res.json({ success: true, data: newProducts, nbHits: newProducts.length });
});

app.listen(5000, () => {
	console.log('listening on port 5000');
});
