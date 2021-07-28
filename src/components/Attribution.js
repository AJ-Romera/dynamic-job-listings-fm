import React from 'react';
import styled from '@emotion/styled';

const Attrib = styled.div`
	font-size: 0.825rem;
	text-align: center;
	margin: 0;
	margin-bottom: 0.4rem;
	padding: 0;

	a {
		color: hsl(228, 46%, 55%);
	}
`;

function Attribution() {
	return (
		<Attrib>
			Challenge by{' '}
			<a
				href='https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt'
				rel='noreferrer'
				target='_blank'
			>
				Frontend Mentor
			</a>
			. Coded by{' '}
			<a href='https://www.linkedin.com/in/aj-romera/'>AJ-Romera</a>.
		</Attrib>
	);
}

export default Attribution;
