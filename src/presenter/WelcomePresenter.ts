import type { Difficulty } from "@/model/types/Difficulty.js";
import { TriviaService } from "@/service/TriviaService.js";
import {Question} from "@/model/Question.js";

export class WelcomePresenter {
	private triviaService: TriviaService;

	public constructor() {
		this.triviaService = new TriviaService();
	}

	public async getTriviaQuestions(difficulty: Difficulty, category: string) {
        const response = await this.triviaService.getQuestions(difficulty, category);
        const quizJson = await response.json()
        const quiz = quizJson.results.map((question: any)=>new Question(question.correct_answer, question.incorrect_answers, question.question, question.category, question.difficulty as Difficulty, question.type ))

        return quiz
	}
}
