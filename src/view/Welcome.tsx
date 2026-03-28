import { useState } from "react";
import { Button } from "@/components/ui/button.js";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select.js";
import type { Difficulty } from "@/model/types/Difficulty.js";
import { WelcomePresenter } from "@/presenter/WelcomePresenter.js";

const Welcome = () => {
	const presenter = new WelcomePresenter();

	const [difficulty, setDifficulty] = useState("easy");
	const [category, setCategory] = useState("");

	const displayQuestions = async (difficulty: string, category: string) => {
		const response = await presenter.getTriviaQuestions(
			difficulty as Difficulty,
			category,
		);
		console.log(response);
	};
	return (
		<div className="flex flex-col items-center justify-center gap-6 p-8">
			<h1 className={"text-3xl"}>Welcome to Trivia Trek.</h1>
			<p>Please select your difficulty level:</p>
			<Select onValueChange={setDifficulty}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Difficulty" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="easy">Easy</SelectItem>
						<SelectItem value="medium">Medium</SelectItem>
						<SelectItem value="hard">Hard</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>

			<Select onValueChange={setCategory}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Category" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="21">Sports</SelectItem>
						<SelectItem value="22">Geography</SelectItem>
						<SelectItem value="23">History</SelectItem>
						<SelectItem value="24">Politics</SelectItem>
						<SelectItem value="25q">Art</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>

			<Button onClick={() => displayQuestions(difficulty, category)}>
				Start Game
			</Button>
		</div>
	);
};

export default Welcome;
