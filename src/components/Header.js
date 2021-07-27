import React from 'react';
import styled from '@emotion/styled';

const GreenHeader = styled.header`
	width: 100%;
	height: 9.75rem;
	background-image: url('images/bg-header-mobile.svg');
	background-size: cover;
	background-position: center;
	background-color: var(--desaturated-dark-cyan);
`;

const H1 = styled.h1`
	display: none;
`;

function Header({ keywords }) {
	return (
		<GreenHeader>
			<H1>Job Listings Frontend Mentor Challenge AJ-Romera</H1>
			{/* {keywords.map((key, id) => {
				return <button key={id}>{key}</button>;
			})} */}
		</GreenHeader>
	);
}

export default Header;
