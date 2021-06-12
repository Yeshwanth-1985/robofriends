import React from 'react';
import Card from './Card.js';

const Cardlist = ({ robots }) => {
	return (
		<div>
		{
    robots.map((user, index) => {
		return (
			<Card key={index} 
			id={robots[index].id} 
			name={robots[index].name} 
			email={robots[index].email}
			address={robots[index].address.street}/>
			);
	})
}
    </div>
		);
}

export default Cardlist;