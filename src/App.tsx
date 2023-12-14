import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Routes from "./Routes";
import useUserStore from "./store/user/userStore";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	const { pathname } = useLocation();
	const { getMe } = useUserStore((state) => state);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			getMe();
		}
	}, [getMe]);

	useEffect(() => {
		AOS.init({
			duration: 500,
		});
		AOS.refresh();
		window.addEventListener("resize", AOS.refresh);
		return () => {
			window.removeEventListener("resize", AOS.refresh);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <Routes />;
}

export default App;
