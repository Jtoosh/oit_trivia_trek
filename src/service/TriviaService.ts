import type {Difficulty} from "@/model/types/Difficulty.js";

export class TriviaService{
    public async getQuestions(difficulty: Difficulty) {
        const response = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`)

        return response
    }
}