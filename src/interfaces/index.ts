export interface AppContextInterface {
    answer: Pokemon,
    setAnswer: React.Dispatch<React.SetStateAction<Pokemon>>,
    guessed: boolean,
    setGuessed: React.Dispatch<React.SetStateAction<boolean>>,
    guesses: Guess[],
    setGuesses: React.Dispatch<React.SetStateAction<Guess[]>>,
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    showLegend: boolean,
    setShowLegend: React.Dispatch<React.SetStateAction<boolean>>,
    showHints: boolean,
    setShowHints: React.Dispatch<React.SetStateAction<boolean>>
}

export interface Trait {
    [index: string]: string | string[]
}

export interface CheckedTrait {
    values: string | string[],
    background: string
}

export interface Guess extends Array<CheckedTrait>{}

export interface Pokemon {
    name: string,
    img: string,
    types: string[],
    mainColor: string,
    eggGroups: string[],
    shape: string,
    generation: string
}

