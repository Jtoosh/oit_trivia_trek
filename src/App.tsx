import NavBar from "@/view/NavBar.js";
import Welcome from "@/view/Welcome.js";

const App = () => {
	return (
		<div className="flex flex-col items-center min-h-screen pt-16">
			<NavBar />
			<Welcome />
		</div>
	);
};

export default App;
