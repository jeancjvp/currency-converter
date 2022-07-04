function OptionsInput({ name, options, onChangeOption }) {
	return (
		<>
			<select onChange={ () => onChangeOption(name) } className='p-2' name={ name }>
				{ options
					.map((option, i) => (
						<option key={ i }>{ option }</option>
					))
				}
			</select>
		</>
	);
}

export default OptionsInput;