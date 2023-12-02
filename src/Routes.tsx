import React from "react";
import { Routes as RoutesCore, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SelectionsDetail from "./pages/SelectionsDetail";
import Collections from "./pages/Collections";
import Auth from "./pages/Auth";

interface IRoutes {
	path: string;
	containerType: "large" | "default" | "no-container";
	component: JSX.Element | JSX.Element[] | string | string[];
	noLayout?: boolean;
}

const Routes = () => {
	const routes: IRoutes[] = [
		{ path: "/", component: <Home />, containerType: "no-container" },
		{ path: "/about-us", component: <AboutUs />, containerType: "no-container" },
		{ path: "/selections/:animeTitle", component: <SelectionsDetail />, containerType: "no-container" },
		{ path: "/collection", component: <Collections />, containerType: "no-container" },
		{ path: "/auth/:authType", component: <Auth />, containerType: "no-container", noLayout: true },
	];

	return (
		<RoutesCore>
			{routes.map((item) => (
				<Route key={item.path} path={item.path} element={item.noLayout ? item.component : <MainLayout containerType={item.containerType}>{item.component}</MainLayout>} />
			))}
		</RoutesCore>
	);
};

export default Routes;
