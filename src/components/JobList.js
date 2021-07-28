import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
	width: 100%;
	height: auto;
	position: relative;
	margin-bottom: 2.375rem;
	padding: 2rem 1.5rem 1.5rem 1.5rem;
	border-radius: 0.425rem;
	background-color: #ffffff;
	-webkit-box-shadow: 3px 12px 26px -22px var(--desaturated-dark-cyan);
	box-shadow: 3px 12px 26px -22px var(--desaturated-dark-cyan);
`;

const FeaturedGreenBorder = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	width: 0.3rem;
	height: 100%;
	background-color: var(--desaturated-dark-cyan);
	border-radius: 6rem 0 0 6rem;
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
	margin-top: -3.5rem;
`;

const CnameAndBadgets = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 0.725rem;
`;

const H2 = styled.h2`
	font-size: 0.8rem;
	color: var(--desaturated-dark-cyan);
	text-transform: capitalize;
	margin-bottom: 0rem;
	margin-right: 1rem;
`;

const NewJob = styled.span`
	padding: 0.5rem 0.5rem 0.175rem 0.5rem;
	margin-right: 0.5rem;
	border-radius: 1rem;
	font-size: 0.65rem;
	color: #ffffff;
	background-color: var(--desaturated-dark-cyan);
	text-transform: uppercase;
	font-weight: 500;
`;

const FeaturedJob = styled.span`
	padding: 0.5rem 0.5rem 0.175rem 0.5rem;
	border-radius: 1rem;
	font-size: 0.65rem;
	color: #ffffff;
	background-color: var(--very-dark-grayish-cyan);
	text-transform: uppercase;
	font-weight: 500;
`;

const H3 = styled.h3`
	font-size: 0.938rem;
	color: var(--very-dark-grayish-cyan);
	text-transform: capitalize;

	&:hover {
		cursor: pointer;
		color: var(--desaturated-dark-cyan);
		transition: all 0.2s ease-in;
	}
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
	font-size: 0.79rem;
	color: var(--desaturated-dark-cyan);
	text-transform: capitalize;
	font-weight: 700;

	&:hover {
		cursor: pointer;
		background-color: var(--desaturated-dark-cyan);
		color: white;
		transition: all 0.3s ease-in;
	}
`;

function JobList({ job, addTag }) {
	const {
		company,
		contract,
		featured,
		id,
		languages,
		level,
		location,
		logo,
		position,
		postedAt,
		role,
		tools,
	} = job;
	let keywords = [role, level, ...languages, ...tools];
	return (
		<div>
			<Card key={id}>
				{featured && <FeaturedGreenBorder></FeaturedGreenBorder>}
				<div>
					<Img src={logo} alt='Company´s logo' />
					<CardContent>
						<CnameAndBadgets>
							<H2>{company}</H2>
							{job.new && <NewJob>New!</NewJob>}
							{featured && <FeaturedJob>Featured</FeaturedJob>}
						</CnameAndBadgets>
						<H3>{position}</H3>
						<Details>
							<DetailsItem>{postedAt}</DetailsItem>
							<DetailsItem>{contract}</DetailsItem>
							<DetailsItem>{location}</DetailsItem>
						</Details>
					</CardContent>
				</div>
				<Tags>
					{keywords.map((key, id) => (
						<Tag onClick={() => addTag(key)} key={id}>
							{key}
						</Tag>
					))}
				</Tags>
			</Card>
		</div>
	);
}

export default JobList;
