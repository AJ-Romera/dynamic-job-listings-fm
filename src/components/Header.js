import React from 'react';
import styled from '@emotion/styled';

const breakpoints = [1024, 1440];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const GreenHeader = styled.header`
	width: 100%;
	height: 9.75rem;
	background-image: url('images/bg-header-mobile.svg');
	background-size: cover;
	background-position: center;
	background-color: var(--desaturated-dark-cyan);

	${mq[0]} {
		background-image: url('images/bg-header-desktop.svg');
	}
`;

function Header({ keywords }) {
	return <GreenHeader></GreenHeader>;
}

export default Header;
