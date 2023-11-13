import Header from "./components/Header";
import Suggestions from "./components/Suggestions";

import "./_style.scss";

const MainLayout = () => {
	return (
		<main className='main-layout'>
			<Header />
			<div className='container'></div>
			<Suggestions />
		</main>
	);
};

export default MainLayout;
