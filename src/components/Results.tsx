import React from 'react';
import {countOfWinners, getWinner} from "../calculation.ts";

type Props = {
    myScore: number,
    enemyScore: number,
    newGame: ()=> void,
}

type State = {
    myWinNumber: number,
    enemyWinNumber: number,
}
class Results extends React.Component<Props, State> {
    state = {
        myWinNumber: 0,
        enemyWinNumber: 0
    }

    render() {
        const winner = getWinner(this.props.myScore, this.props.enemyScore)
        console.log(winner)
        console.log(countOfWinners.me)
        console.log(countOfWinners.enemy)
        return (
            <div>
                <p className={"winner"}>{winner}</p>
                <p className={"score"}>{`${countOfWinners.me} - ${countOfWinners.enemy}`}</p>
                <button onClick={() => {this.props.newGame()}}>AGAIN</button>
            </div>
        );
    }
}

export default Results;