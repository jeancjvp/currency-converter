// Main Imports
import axios from 'axios';

export function getCurrency(from_to, amount, memo, assignTotal, addToMemo) {
	
	// Note: Bad practice having the apiKey in the front... You want to have this in a backend service and call that service from here.
	const url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=${process.env.REACT_APP_API_KEY}`;

	axios.get(url)
		.then((res) => {
			const total = res.data[from_to] * amount;
			assignTotal(total);

			memo[from_to] = res.data[from_to];
			addToMemo({ ...memo });
		})
		.catch((e) => {
			return;
		});
}