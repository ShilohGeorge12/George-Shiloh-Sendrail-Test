import { typeGaurd } from "../../types";

export const Fetch: fetchReq = async (endPoint, method, cacheControl, data) => {
	const options: RequestInit = {
		method,
		cache: cacheControl,
	};

	if (method === 'POST') {
		options.headers = { 'Content-type': 'application/json' };
		options.body = JSON.stringify(data);
	}
	try {
		const url = `http://localhost:5000/api${endPoint}`;
		const req = await fetch(url, options);
		const res = await req.json();
		return res;
	} catch (e) {
		if (typeGaurd<Error>(e)) console.warn(e.message);
	}
};
