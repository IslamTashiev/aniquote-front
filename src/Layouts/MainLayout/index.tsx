import Header from "./components/Header";
import Suggestions from "./components/Suggestions";

import "./_style.scss";
import clsx from "clsx";

interface MainLayoutProps {
	children: JSX.Element | JSX.Element[] | string | string[];
	containerType?: "large" | "default" | "no-container";
}

const MainLayout = ({ children, containerType = "default" }: MainLayoutProps) => {
	return (
		<main className='main-layout'>
			<Header />
			<div className={clsx("container", containerType)}>{children}</div>
			<Suggestions />
		</main>
	);
};

export default MainLayout;
