import React from 'react';
import styled from '@emotion/styled';

const breakpoints = [1024, 1440];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

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

	${mq[0]} {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 2.438rem;
	}
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

const ImgAndCardContent = styled.div`
	width: auto;
	${mq[0]} {
		display: flex;
		flex-direction: row;
	}
`;

const Img = styled.img`
	position: absolute;
	width: 3rem;
	margin-top: -3.5rem;

	${mq[0]} {
		position: relative;
		width: auto;
		margin-top: 0;
		margin-right: 1.625rem;
	}
`;

const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	padding-bottom: 1.2rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);

	${mq[0]} {
		border-bottom: none;
		padding-bottom: 0;
	}
`;

const CnameAndBadgets = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 0.725rem;

	${mq[0]} {
		margin-bottom: 0.688rem;
	}
`;

const H2 = styled.h2`
	font-size: 0.8rem;
	color: var(--desaturated-dark-cyan);
	text-transform: capitalize;
	margin: 0 1rem 0 0;

	${mq[0]} {
		font-size: 0.9rem;
	}
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
	padding: 0.5rem 0.6rem 0.175rem 0.6rem;
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

	${mq[0]} {
		margin-bottom: 0.75rem;
		font-size: 1.1244rem;
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

	${mq[0]} {
		font-size: 0.925rem;

		&::after {
			margin: -0.1rem 0.7rem;
		}
	}
`;

const Tags = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;

	${mq[0]} {
		width: 40%;
		margin-top: -1rem;
	}
	${mq[1]} {
		width: auto;
	}
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

	${mq[0]} {
		padding: 0.65rem 0.5rem 0.45rem 0.5rem;
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
				<ImgAndCardContent>
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
				</ImgAndCardContent>
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
