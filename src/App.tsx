import NavBar from "@/view/NavBar.js";
import Welcome from "@/view/Welcome.js";
import {Routes} from "react-router";
import {Route} from "lucide-react";

const App = () => {
	return (
		<div className="flex flex-col items-center min-h-screen pt-16">
			<NavBar />
            <Routes>
                <Route path="/" element={<Welcome/>}/>
            </Routes>
		</div>
	);
};

export default App;
