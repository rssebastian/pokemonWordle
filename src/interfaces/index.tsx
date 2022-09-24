export interface GuessTrait {
    values: string | string[],
    background: string
}

export interface Answer {
    name: string,
    img: string,
    type: string[],
    mainColor: string,
    eggGroup: string[],
    shape: string,
    region: string
}

export interface Trait {
    [index: string]: string | string[]
}