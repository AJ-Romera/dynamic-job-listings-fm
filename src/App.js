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
	padding: 0 1.438rem;
`;

const FilterTable = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	margin-top: -5.75rem;
	margin-bottom: 3.5rem;
	padding: 0.8rem 1.188rem;
	border-radius: 0.425rem;
	background-color: #ffffff;
	-webkit-box-shadow: 3px 12px 26px -22px var(--desaturated-dark-cyan);
	box-shadow: 3px 12px 26px -22px var(--desaturated-dark-cyan);
`;

const TableLeft = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80%;
`;

const Keyword = styled.span`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: var(--light-grayish-cyan-filter-tablets);
	margin: 0.5rem 3rem 0.5rem 0rem;
	padding: 0.6rem 0.5rem 0.4rem 0.5rem;
	border-radius: 0.3rem 0 0 0.3rem;
	font-size: 0.79rem;
	color: var(--desaturated-dark-cyan);
	text-transform: capitalize;
	font-weight: 700;
	cursor: default;

	&:after {
		position: absolute;
		right: -2.1rem;
		top: 0;
		bottom: 0;
		content: '';
		padding: 0.7rem 1rem;
		border-radius: 0 0.3rem 0.3rem 0;
		background-color: var(--desaturated-dark-cyan);
		background-image: url(images/icon-remove.svg);
		background-repeat: no-repeat;
		background-position: center;
	}

	&:hover:after {
		cursor: pointer;
		background-color: var(--very-dark-grayish-cyan);
		transition: all 0.3s ease-in;
	}
`;

const TableRight = styled.div`
	display: flex;
	width: 20%;
	justify-content: center;
	align-items: center;
	font-size: 0.79rem;
	font-weight: 700;
	color: var(--dark-grayish-cyan);

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

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

	const handleFilterClick = (passedFilter) => {
		setFilter(filter.filter((f) => f !== passedFilter));
	};

	const filteredJobs = jobs.filter(filterFunc);

	return (
		<div className='App'>
			<Header />
			<Container>
				{filter.length > 0 && (
					<FilterTable>
						<TableLeft>
							{filter.map((filteredKeyword) => (
								<Keyword
									onClick={() =>
										handleFilterClick(filteredKeyword)
									}
								>
									{filteredKeyword}
								</Keyword>
							))}
						</TableLeft>
						<TableRight>Clear</TableRight>
					</FilterTable>
				)}
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
