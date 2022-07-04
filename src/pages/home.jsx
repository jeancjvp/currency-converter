// Main Imports
import { useState } from "react";

// Services
import { getCurrency } from '../services/getCurrency';

// Components
import CurrencyForm from "../components/currencyForm";

function HomePage() {

	const [result, setResult] = useState();
	const [memo, setMemo] = useState({});

	// Submit Handler
	function handleSubmit(event) {
		event.preventDefault();
        
		// Inputs
		const fields = event.target;
		const amount = fields.amountFrom.value;
		const from   = fields.currencyFrom.value;
		const to     = fields.currencyTo.value;

		// Error handler
		if (!amount || !from || !to) return;

		const from_to = `${from}_${to}`;
		const to_from = `${to}_${from}`;
		
		// Memoization Logic
		if (from_to in memo) {
			const total = amount * memo[from_to];
			assignTotal(total);
			
		} else if (to_from in memo) {
			const total = amount / memo[to_from];
			assignTotal(total);
			
		} else {
			getCurrency(from_to, amount, memo, assignTotal, addToMemo);
		}
	}

	// Assign Total
	const assignTotal = (total) => {
		setResult(Number.parseFloat(total).toFixed(2));
	}

	// Setting Memoization
	const addToMemo = (memo) => {
		setMemo({ ...memo });
	}

	return (
		<div className='vh-100 d-flex text-center'>
			<div className='m-auto'>
				<h1 className='mb-5 text-white'>Currency Converter</h1>
				<CurrencyForm handleSubmit={ handleSubmit } result={ result }/>
			</div>
		</div>
	);
}

export default HomePage;