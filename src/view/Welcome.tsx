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
		<div className="flex flex-col items-center justify-center gap-6 p-8">
			<h1 className={"text-3xl"}>Welcome to Trivia Trek.</h1>
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
