import {Component} from 'react'
import './App.css'
import Game from "./components/Game.tsx";

type State = {
    name: string,
}

class App extends Component<{},State> {
    state: State = {
        name: '',
    }

    nameChecking = (name: string) => {
        if (name.trim() !== '') {
            this.setState({name: name})
        }
    }

    render() {
        let name: string = "";

        return (<div>
            {!this.state.name &&
                <div>

                    <h1>Ready for WAR</h1>
                    <input type={"text"} placeholder="Enter your name" onChange={(e) => name = e.target.value}/>
                    <div>
                        <button onClick={(e) => {
                            e.currentTarget.blur();
                            this.nameChecking(name)
                        }} type="button">START
                        </button>
                    </div>
                </div>}
            {this.state.name && <Game key={this.state.name} myName={this.state.name} />}
        </div>);
    }
}

export default App
