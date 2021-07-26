import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
	width: 100%;
	height: auto;
	margin-bottom: 2.375rem;
	padding: 2.25rem 1.5rem 1.5rem 1.5rem;
	border-radius: 0.425rem;
	background-color: #ffffff;
	-webkit-box-shadow: 3px 12px 26px -22px var(--desaturated-dark-cyan);
	box-shadow: 3px 12px 26px -22px var(--desaturated-dark-cyan);
`;

const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	padding-bottom: 1.2rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const Img = styled.img`
	position: absolute;
	width: 3rem;
	margin-top: -3.75rem;
`;

const H2 = styled.h2`
	font-size: 0.8rem;
	color: var(--desaturated-dark-cyan);
	text-transform: capitalize;
	margin-bottom: 1rem;
`;

const H3 = styled.h3`
	font-size: 0.938rem;
	color: var(--very-dark-grayish-cyan);
	text-transform: capitalize;
`;

const Details = styled.ul`
	display: flex;
	flex-direction: row;
	list-style: none;
	margin: 0;
	padding: 0;
`;

const DetailsItem = styled.li`
	display: inline-flex;
	color: var(--dark-grayish-cyan);
	font-size: 0.8rem;
	line-height: 1rem;

	&::after {
		content: '·';
		font-size: 2rem;
		margin: -0.1rem 0.3rem;
		color: rgba(122, 142, 142, 0.525);
	}

	&:last-child::after {
		display: none;
	}
`;

const Tags = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex: 0 1 100%;
	flex-wrap: wrap;
	width: 100%;
	height: auto;
	flex-wrap: wrap;
`;

const Tag = styled.span`
	background-color: var(--light-grayish-cyan-filter-tablets);
	margin: 1rem 1rem 0 0;
	padding: 0.6rem 0.5rem 0.4rem 0.5rem;
	border-radius: 0.3rem;
	font-size: 0.8rem;
	color: var(--desaturated-dark-cyan);
	text-transform: capitalize;
	font-weight: 700;
`;

function JobCard({ data }) {
	console.log(data);
	return (
		<div>
			{data.map((job) => {
				return (
					<Card key={job.id}>
						<div>
							<Img src={job.logo} alt='Company´s logo' />
							<CardContent>
								<H2>{job.company}</H2>
								<H3>Junior Frontend Developer</H3>
								<Details>
									<DetailsItem>2d ago</DetailsItem>
									<DetailsItem>Part Time</DetailsItem>
									<DetailsItem>USA only</DetailsItem>
								</Details>
							</CardContent>
						</div>
						<Tags>
							<Tag>Frontend</Tag>
							<Tag>Junior</Tag>
							<Tag>React</Tag>
							<Tag>Sass</Tag>
							<Tag>JavaScript</Tag>
						</Tags>
					</Card>
				);
			})}
		</div>
	);
}

export default JobCard;
