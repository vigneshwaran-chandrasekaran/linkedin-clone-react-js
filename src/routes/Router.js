import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as Pages from 'routes';
import { Header } from 'components/common';

export default function Router() {
	return (
		<BrowserRouter>
			<Header />
			<div style={{ paddingTop: '60px' }}>
				<Routes>
					<Route path="/">
						<Route index element={<Pages.Home />} />
						<Route path="feed" element={<Pages.Home />} />
						<Route path="jobs" element={<Pages.Jobs />} />
						<Route path="messaging" element={<Pages.Messaging />} />
						<Route path="notifications" element={<Pages.Notifications />} />
					</Route>
					<Route path="/mynetwork">
						<Route index element={<Pages.MyNetwork />} />
						<Route index={false} path="discover-hub" element={<Pages.DiscoverHub />} />
					</Route>
					<Route path="*" element={<p>No Match</p>} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}
