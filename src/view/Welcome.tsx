import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const Welcome = () => {
	return (
		<>
			<h1>Welcome to Trivia Trek.</h1>
			<Select>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Theme" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="light">Light</SelectItem>
						<SelectItem value="dark">Dark</SelectItem>
						<SelectItem value="system">System</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</>
	);
};
