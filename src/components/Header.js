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

function Header() {
	return <GreenHeader></GreenHeader>;
}

export default Header;
