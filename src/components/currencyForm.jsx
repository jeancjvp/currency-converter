// Main Imports
import { useState } from 'react';

// Currencies
import { currencies } from '../helpers/supportedSymbols.js';

// Components
import Input from './input';
import OptionsInput from './optionsInput';

function CurrencyForm({ handleSubmit, result = '' }) {

	const [currencyFrom, setCurrencyFrom] = useState('USD');
	const [currencyTo, setCurrencyTo] = useState('EUR');

	// Setting Country names onChange
	function onChangeOption(name) {
		if (name === 'currencyFrom') setCurrencyFrom(document.querySelector('select[name="currencyFrom"]').value);
		if (name === 'currencyTo') setCurrencyTo(document.querySelector('select[name="currencyTo"]').value);
	}

	return (
		<>
			<form onSubmit={ handleSubmit }>
				<div className='form-group mb-4'>
					<h6 className='subtitle text-white'>From: <span className='country'>{ currencyFrom ? currencies[currencyFrom]['currencyName'] : null }</span></h6>
					<div className='justify-content-center row'>
						<div className='col-8 p-0'>
							<Input type={'number'} name={'amountFrom'} placeholder={'Amount'}/>
						</div>
						<div className='col p-0'>
							<OptionsInput name={'currencyFrom'} options={ Object.keys(currencies).sort() } onChangeOption={ onChangeOption } defaultValue={ currencies[currencyFrom]['id'] }/>
						</div>
					</div>
				</div>

				<div className='form-group my-4'>
					<h6 className='subtitle text-white'>To: <span className='country'>{ currencyTo ? currencies[currencyTo]['currencyName'] : null }</span></h6>
					<div className='justify-content-center row'>
						<div className='col-8 p-0'>
							<div className='output p-2 bg-white'>{ !result ? '-' : result }</div>
						</div>
						<div className='col p-0'>
							<OptionsInput name={'currencyTo'} options={ Object.keys(currencies).sort() } onChangeOption={ onChangeOption } defaultValue={ currencies[currencyTo]['id'] }/>
						</div>
					</div>
				</div>

				<button type='submit' className='btn btn-primary px-4 py-2 mt-4'>Calculate</button>
			</form>
		</>
	);
}

export default CurrencyForm;