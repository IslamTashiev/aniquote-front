import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Routes from "./Routes";
import useUserStore from "./store/user/userStore";
import AOS from "aos";
import "aos/dist/aos.css";
import UnAuthorizedModal from "./components/UnAuthorizedModal";

function App() {
	const { pathname } = useLocation();
	const { checkAuth } = useUserStore((state) => state);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			checkAuth();
		}
	}, [checkAuth]);

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

	return (
		<>
			<Routes />
			<UnAuthorizedModal />
		</>
	);
}

export default App;
