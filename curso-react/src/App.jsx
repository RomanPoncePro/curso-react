import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AboutScreen } from "./routes/AboutScreen";
import { ContactScreen } from "./routes/ContactScreen";
import { HomeScreen } from "./routes/HomeScreen";


export const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomeScreen></HomeScreen>}></Route>
				<Route path="/contact" element={<ContactScreen></ContactScreen>}></Route>
				<Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
				<Route path="/*" element={<Navigate to="/"></Navigate>}></Route>

			</Routes>	


		</>
	);
};
