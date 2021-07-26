import data from './data.json';
import './index.css';
import styled from '@emotion/styled';
import JobFilter from './components/JobFilter';
import JobCard from './components/JobCard';
import Attribution from './components/Attribution';
import Header from './components/Header';

const Container = styled.main`
	width: auto;
	margin: 3.438rem auto 0 auto;
	margin-top: 3.438rem;
	padding: 0 1.438rem;
`;

function App() {
	return (
		<div className='App'>
			<Header />
			<Container>
				<JobFilter />
				<JobCard data={data} />
			</Container>
			<Attribution />
		</div>
	);
}

export default App;
