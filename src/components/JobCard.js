import React from 'react';

function JobCard() {
	return (
		<div>
			<div>
				<img src='images/account.svg' alt='Company´s logo' />
				<div>
					<span>Company</span>
					<span>Position/Role</span>
					<ul>
						<li>1d ago</li>
						<li>Full Time</li>
						<li>Location (Remote, Spain, America?)</li>
					</ul>
				</div>
			</div>
			<div>
				<span>Frontend</span>
				<span>Junior</span>
				<span>React</span>
				<span>CSS</span>
			</div>
		</div>
	);
}

export default JobCard;
