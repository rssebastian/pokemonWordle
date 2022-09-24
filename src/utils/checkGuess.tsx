import determineColor from "./determineColor";
import { GuessTrait, Answer, Trait} from "../interfaces";

const checkGuess = (guess: Trait[], answer: Answer):Promise<GuessTrait[]> => {
    return new Promise((resolve) => {
        resolve(guess.map(trait => {
            const traitName = Object.keys(trait)[0];
            const traitValue = Object.values(trait)[0];
            if (traitName === 'img'){
                return {
                    values: traitValue,
                    background: 'img'
                }
            }
            return {
                values: traitValue,
                background: determineColor(traitValue, answer[traitName as keyof Answer])
            }
        }))
    })
}

export default checkGuess;