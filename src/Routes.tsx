import React from "react";
import { Routes as RoutesCore, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SelectionsDetail from "./pages/SelectionsDetail";
import Collections from "./pages/Collections";

interface IRoutes {
	path: string;
	containerType: "large" | "default" | "no-container";
	component: JSX.Element | JSX.Element[] | string | string[];
}

const Routes = () => {
	const routes: IRoutes[] = [
		{ path: "/", component: <Home />, containerType: "no-container" },
		{ path: "/about-us", component: <AboutUs />, containerType: "no-container" },
		{ path: "/selections/:animeTitle", component: <SelectionsDetail />, containerType: "no-container" },
		{ path: "/collection", component: <Collections />, containerType: "no-container" },
	];

	return (
		<RoutesCore>
			{routes.map((item) => (
				<Route key={item.path} path={item.path} element={<MainLayout containerType={item.containerType}>{item.component}</MainLayout>} />
			))}
		</RoutesCore>
	);
};

export default Routes;
