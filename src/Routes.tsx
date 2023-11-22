import React from "react";
import { Routes as RoutesCore, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SelectionsDetail from "./pages/SelectionsDetail";

const Routes = () => {
	return (
		<RoutesCore>
			<Route
				path='/'
				element={
					<MainLayout containerType='no-container'>
						<Home />
					</MainLayout>
				}
			/>
			<Route
				path='/about-us'
				element={
					<MainLayout containerType='no-container'>
						<AboutUs />
					</MainLayout>
				}
			/>
			<Route
				path='/selections/:animeTitle'
				element={
					<MainLayout containerType='no-container'>
						<SelectionsDetail />
					</MainLayout>
				}
			/>
		</RoutesCore>
	);
};

export default Routes;
