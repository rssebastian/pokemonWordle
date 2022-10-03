import determineColor from "./determineColor";
import { Pokemon, Guess} from "../interfaces";

const checkGuess = (guess: Pokemon, answer: Pokemon):Promise<Guess> => {
    
    const traitCheckOrder:string[] = ["name", "img", "types", "mainColor", "eggGroups", "shape", "generation"];
    const checkedGuess:Guess = traitCheckOrder.map(trait => {
        const traitValue = guess[trait as keyof Pokemon];
        if (trait === "img"){
            return {
                values: traitValue,
                background: trait
            }
        }
        return {
            values: traitValue,
            background: determineColor(traitValue, answer[trait as keyof Pokemon])
        }
    })
    return Promise.resolve(checkedGuess);
}
export default checkGuess;