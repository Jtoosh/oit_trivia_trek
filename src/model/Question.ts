import type {Difficulty} from "@/model/types/Difficulty.js";
import {type} from "node:os";

export class Question {
    private _correct_answer: string;
    private _incorrect_answers: string[];
    private _category: string;
    private difficulty: Difficulty;
    private type: string

    constructor(correct_answer: string, incorrect_answers: string[], category: string, difficulty: Difficulty, type: string) {
        this._correct_answer = correct_answer;
        this._incorrect_answers = incorrect_answers;
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

    get category(): string {
        return this._category;
    }


}