import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
}	from 'react-router-dom';
import GlobalStyle from "./styled/globalStyles";
import HomePage from "./pages/HomePage";

const App = () => {
	return (
		<Router>
			<GlobalStyle />

			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/dashboard">
					{/* dashboard component */}
				</Route>
			</Switch>
		</Router>
	);
}

export default App;