import React from 'react';
import styled from '@emotion/styled';
import JobFilter from './JobFilter';
import JobCard from './JobCard';

const Container = styled.main`
	width: auto;
	margin: 0 auto;
	padding: 0 1.438rem;
`;

function CardsContainer() {
	return (
		<Container>
			<JobFilter />
			{/* Here is where you map the cards later */}
			<JobCard />
		</Container>
	);
}

export default CardsContainer;
