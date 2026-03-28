import { Route, Routes } from "react-router";
import { TriviaProvider } from "@/context/TriviaContext.js";
import NavBar from "@/view/NavBar.js";
import Welcome from "@/view/Welcome.js";
import Question from "@/view/Question.js";

const App = () => {
	return (
		<TriviaProvider>
			<div className="flex flex-col items-center min-h-screen pt-16">
				<NavBar />
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="/question" element={<Question />} />
				</Routes>
			</div>
		</TriviaProvider>
	);
};

export default App;
