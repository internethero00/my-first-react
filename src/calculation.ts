import info_cards from "./config/cards.json"

export type card_item = {
    name: string,
    value: number,
    img: string
}

function shuffleArray<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

export function getNewCards() : card_item[] {
    const cards: card_item[] = []
    info_cards.cards.forEach((card) => {cards.push(card)})
    return shuffleArray(cards)
}

export const countOfWinners = {
    me: 0,
    enemy: 0
}

export const getWinner = (myScore: number, enemyScore: number,):string => {
    let winner: string;
    if (myScore > enemyScore) {
        winner = "YOU WIN";
        countOfWinners.me += 1

    } else if (enemyScore > myScore){
        winner = "YOU LOSE";
        countOfWinners.enemy += 1
    } else {
        winner = "DRAW";
        countOfWinners.me += 1
        countOfWinners.enemy += 1
    }
    return winner
}