import type { Difficulty } from "@/model/types/Difficulty.js";

export class Question {
	private _correct_answer: string;
	private _incorrect_answers: string[];
	private _category: string;
    private _question: string
	private difficulty: Difficulty;
	private type: string;

	constructor(
		correct_answer: string,
		incorrect_answers: string[],
        question:string,
		category: string,
		difficulty: Difficulty,
		type: string,
	) {
		this._correct_answer = correct_answer;
		this._incorrect_answers = incorrect_answers;
        this._question = question
		this._category = category;
		this.difficulty = difficulty;
		this.type = type;
	}

	get correct_answer(): string {
		return this._correct_answer;
	}

	get incorrect_answers(): string[] {
		return this._incorrect_answers;
	}

    get question():string{
        return this._question;
    }

	get category(): string {
		return this._category;
	}
}
