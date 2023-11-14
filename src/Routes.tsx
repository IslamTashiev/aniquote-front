import React from "react";
import { Routes as RoutesCore, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";

const Routes = () => {
	return (
		<RoutesCore>
			<Route
				path='/'
				element={
					<MainLayout>
						<Home />
					</MainLayout>
				}
			/>
		</RoutesCore>
	);
};

export default Routes;
