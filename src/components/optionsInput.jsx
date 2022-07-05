function OptionsInput({ name, options, onChangeOption, defaultValue = null }) {
	return (
		<>
			<select onChange={ () => onChangeOption(name) } className='p-2 h-100' name={ name } value={ defaultValue }>
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