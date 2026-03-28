import type { Difficulty } from "@/model/types/Difficulty.js";

export class TriviaService {
	public async getQuestions(difficulty: Difficulty, category: string) {
		const response = await fetch(
			`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`,
		);

		return response;
	}
}
