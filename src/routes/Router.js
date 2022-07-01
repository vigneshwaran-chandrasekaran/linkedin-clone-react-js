import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, DiscoverHub, MyNetwork } from 'routes';
import { Header } from 'components/common';

export default function Router() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}>
					<Route index element={<Home />} />
					<Route path="feed" element={<Home />} />
					<Route path="jobs" element={<Home />} />
					<Route path="messaging" element={<Home />} />
					<Route path="notifications" element={<Home />} />
				</Route>
				<Route path="mynetwork" element={<MyNetwork />}>
					<Route path="discover-hub" element={<DiscoverHub />} />
				</Route>
				<Route path="*" element={<p>No Match</p>} />
			</Routes>
		</BrowserRouter>
	);
}
