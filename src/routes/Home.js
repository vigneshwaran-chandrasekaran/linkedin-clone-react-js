import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/feed">Feed</Link>
				<Link to="/mynetwork">mynetwork</Link>
				<Link to="/mynetwork/discover-hub">discover-hub</Link>
				<Link to="/jobs">jobs</Link>
				<Link to="/messaging">messaging</Link>
			</nav>
		</div>
	);
}
