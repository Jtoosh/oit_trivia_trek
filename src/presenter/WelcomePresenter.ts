import {TriviaService} from "@/service/TriviaService.js";
import type {Difficulty} from "@/model/types/Difficulty.js";

export class WelcomePresenter {
    private triviaService: TriviaService

    public constructor() {
        this.triviaService = new TriviaService();
    }

    public async getTriviaQuestions(difficulty: Difficulty){
        return await this.triviaService.getQuestions(difficulty)
    }
}