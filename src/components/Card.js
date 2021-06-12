import React from 'react';

const Card = ({name, email, id, address}) =>  {
		return (
			<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img src={`https://robohash.org/${id}?size=200x200`} alt="Person" />
				<div className='tc'>
					<h2> {name} </h2>
					<p> {email} </p>
					<p> {address} </p>
				</div>
			</div>
			);
	}

export default Card; 