const determineColor = (guess: string | string[], answer: string | string[]):string => {
    let color;
    if (Array.isArray(answer)){
        if (typeof guess === 'string'){
            if (answer.includes(guess)) color = 'orange';
            else color = 'red';
        } else {
            if (guess.every(element => answer.includes(element))) color = 'green';
            else if (guess.some(element => answer.includes(element))) color = 'orange';
            else color = 'red';
        }
    } else {
        if (Array.isArray(guess)) {
            if (guess.includes(answer)) color = 'orange';
            else color = 'red';
        } else {
            if (guess === answer) color = 'green';
            else color = 'red';
        }
    }
    return color;
}

export default determineColor;