import React from 'react';
import {type card_item, getNewCards} from "../calculation.ts";
import Results from "./Results.tsx";

type Props = {
    myName: string;
}
type State = {
    myCounter: number;
    counterEnemy: number;
    myCard: card_item | undefined
    enemyCard: card_item | undefined
    random_array_cards: card_item[]
}

class Game extends React.Component<Props, State> {
    state: State = {
        myCounter: 0,
        counterEnemy: 0,
        myCard: {
            name: "",
            value: 0,
            img: ""
        },
        enemyCard: {
            name: "",
            value: 0,
            img: ""
        },
        random_array_cards: getNewCards()
    };

    takeTwoCards = () => {
        const random_cards: card_item[] = [...this.state.random_array_cards]
        if (random_cards.length !== 0) {
            const myCard = random_cards.pop();
            const enemyCard = random_cards.pop();
            this.setState({
                myCounter: this.state.myCounter + (myCard?.value ?? 0),
                counterEnemy: this.state.counterEnemy + (enemyCard?.value ?? 0),
                myCard: myCard, enemyCard: enemyCard, random_array_cards: random_cards
            });
        }
    }

    newGame = () => {
        this.setState({
            myCounter: 0,
            counterEnemy: 0,
            myCard: {
                name: "",
                value: 0,
                img: ""
            },
            enemyCard: {
                name: "",
                value: 0,
                img: ""
            },
            random_array_cards: getNewCards()
        }, this.takeTwoCards)
    }

    componentDidMount() {
        if (this.state.myCard?.img === "") {
            this.takeTwoCards();
        }
    }

    render() {
        console.log(this.state.myCounter);
        console.log(this.state.counterEnemy);


        return (
            this.state.random_array_cards.length === 0 ? (
                    <Results key={this.state.myCounter} myScore={this.state.myCounter} enemyScore={this.state.counterEnemy}
                             newGame={this.newGame}/>) :
                (<div>
                    <div>
                        <p className={"enemy_name"}>COMPUTER</p>
                        {this.state.enemyCard?.img && (
                            <img className={"enemy_card"} src={`${import.meta.env.BASE_URL}${this.state.enemyCard!.img}`} alt={this.state.enemyCard!.name}/>)}
                    </div>
                    <div>
                        {this.state.myCard?.img && (<img src={`${import.meta.env.BASE_URL}${this.state.myCard!.img}`} alt={this.state.myCard!.name}/>)}
                        <p className={"my_name"}>{this.props.myName.toUpperCase()}</p>

                    </div>
                    <button onClick={() => this.takeTwoCards()}>NEXT</button>

                </div>)
        );
    }
}

export default Game;
