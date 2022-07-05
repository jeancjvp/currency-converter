function Input({ type, name, placeholder = '' }) {
	return (
		<>
			<input type={ type } className='p-2 w-100' name={ name } placeholder={ placeholder } step={ type === 'number' ? '0.01' : null }/>
		</>
	);
}

export default Input;