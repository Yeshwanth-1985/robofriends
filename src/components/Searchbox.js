import React from 'react';

const Searchbox = ({searchChange}) => {
	return (
		<div className='pa3'>
			<input 
				style = {{borderRadius: '8px',}}
				className='pa3 ba b--green bg-lightest-blue tc'
				type='search' 
				placeholder='search robots' 
				onChange={searchChange}
			/>
		</div>
		);
}

export default Searchbox;