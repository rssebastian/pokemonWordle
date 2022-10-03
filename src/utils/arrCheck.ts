import bgColors from './bgColors'

const arrCheck = (guess:string[], answer:string[]):string => {
    let color = bgColors.Red;
    switch (guess.length) {
        case 2:
            if (answer.includes(guess[0]) && answer.includes(guess[1])) color = bgColors.Green
            else if (answer.includes(guess[0]) || answer.includes(guess[1])) color = bgColors.Orange
            return color;
        case 1:
            if (answer[0] === guess[0] && answer.length === 1) color = bgColors.Green
            else if (answer.includes(guess[0])) color = bgColors.Orange
            return color
        default:
            return color
    }
}

export default arrCheck