import { Route, Routes } from "react-router";
import NavBar from "@/view/NavBar.js";
import Question from "@/view/Question.js";
import Welcome from "@/view/Welcome.js";

const App = () => {
	return (
		<div className="flex flex-col items-center min-h-screen pt-16">
			<NavBar />
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="question" element={<Question />} />
			</Routes>
		</div>
	);
};

export default App;
