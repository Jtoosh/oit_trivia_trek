import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select.js";
import {Button} from "@/components/ui/button.js";
import {WelcomePresenter} from "@/presenter/WelcomePresenter.js";
import {useState} from "react";
import type {Difficulty} from "@/model/types/Difficulty.js";

const Welcome = () => {
    const presenter = new WelcomePresenter();

      const [difficulty, setDifficulty] = useState("easy")

    const displayQuestions = async (difficulty:string) => {
        const response = await presenter.getTriviaQuestions(difficulty as Difficulty)
        console.log(response)
    }
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

            <Button onClick={() =>displayQuestions(difficulty)}>
                Generate Trivia Questions
            </Button>
		</div>
	);
};

export default Welcome;
