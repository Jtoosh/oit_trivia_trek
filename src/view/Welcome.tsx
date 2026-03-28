import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select.js";

const Welcome = () => {
	return (
		<div className={"text-center align-super"}>
			<h1 className={"text-2xl"}>Welcome to Trivia Trek.</h1>
			<Select>
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
		</div>
	);
};

export default Welcome;
