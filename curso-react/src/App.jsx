import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./routes/components/Navbar";
import { AboutScreen } from "./routes/AboutScreen";
import { ContactScreen } from "./routes/ContactScreen";
import { HomeScreen } from "./routes/HomeScreen";
import { Userprovider } from "./routes/context/Userprovider";


export const App = () => {
	return (
		<Userprovider>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomeScreen></HomeScreen>}></Route>
				<Route path="/contact" element={<ContactScreen></ContactScreen>}></Route>
				<Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
				<Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
			</Routes>	
		</Userprovider>
	);
};
