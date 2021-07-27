import React, { useState, useEffect } from 'react';
import data from './data.json';
import './index.css';
import styled from '@emotion/styled';
import JobList from './components/JobList';
import Attribution from './components/Attribution';
import Header from './components/Header';

const Container = styled.main`
	width: auto;
	margin: 3.438rem auto 0 auto;
	margin-top: 3.438rem;
	padding: 0 1.438rem;
`;

/* const Card = styled.div`
	width: 100%;
	height: auto;
	position: relative;
	margin-bottom: 2.375rem;
	padding: 2rem 1.5rem 1.5rem 1.5rem;
	border-radius: 0.425rem;
	background-color: #ffffff;
	-webkit-box-shadow: 3px 12px 26px -22px var(--desaturated-dark-cyan);
	box-shadow: 3px 12px 26px -22px var(--desaturated-dark-cyan);
`; */

function App() {
	const [jobs, setJobs] = useState([]);
	const [filter, setFilter] = useState([]);

	useEffect(() => {
		setJobs(data);
	}, []);

	const filterFunc = ({ role, level, languages, tools }) => {
		if (filter.length === 0) {
			return true;
		}

		const keywords = [role, level, ...languages, ...tools];

		return keywords.some((keyword) => filter.includes(keyword));
	};

	const handleTagClick = (keyword) => {
		if (filter.includes(keyword)) {
			return;
		}

		setFilter([...filter, keyword]);
	};

	const filteredJobs = jobs.filter(filterFunc);

	return (
		<div className='App'>
			<Header />
			<Container>
				<div>
					{filter.length > 0 && filter.map((fi) => <span>{fi}</span>)}
				</div>
				{jobs.length === 0 ? (
					<p>No jobs found...</p>
				) : (
					filteredJobs.map((job) => (
						<JobList
							job={job}
							key={job.id}
							handleTagClick={handleTagClick}
						/>
					))
				)}
			</Container>
			<Attribution />
		</div>
	);
}

export default App;
