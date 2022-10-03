import {bgColors, arrCheck} from '../utils';

type Args = string | string[];

const determineColor = (guess:Args, answer:Args):string => {
    let color = bgColors.Red;
    if (Array.isArray(answer)) return arrCheck(guess as string[], answer);
    else if (guess === answer) color = bgColors.Green
    return color;
}

export default determineColor;