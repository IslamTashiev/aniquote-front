import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Routes from "./Routes";
import useUserStore from "./store/user/userStore";

function App() {
	const { pathname } = useLocation();
	const { getMe } = useUserStore((state) => state);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		getMe();
	}, [getMe]);

	return <Routes />;
}

export default App;
