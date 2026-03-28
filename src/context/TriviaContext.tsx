import { createContext, type ReactNode, useContext, useState } from "react";
import type { Question } from "@/model/Question.js";

interface TriviaContextType {
	questions: Question[];
	setQuestions: (questions: Question[]) => void;
}

export const TriviaContext = createContext<TriviaContextType | undefined>(
	undefined,
);

export const TriviaProvider = ({ children }: { children: ReactNode }) => {
	const [questions, setQuestions] = useState<Question[]>([]);

	return (
		<TriviaContext.Provider value={{ questions, setQuestions }}>
			{children}
		</TriviaContext.Provider>
	);
};
