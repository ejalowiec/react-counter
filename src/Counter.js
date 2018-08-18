import React, {Component} from 'react';
import "./Counter.css";
import Display from "./Display"; 
import ButtonsPanel from "./ButtonsPanel";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counterValue: 0
        }

        //jesli metora zrobiona w ES5, to trzeba bindować. Jeśli w ES 6, to nie trzeba, bo domyślnie widzi obiekt.
        // this.incrementCounter = this.incrementCounter.bind(this)
    }
    
    updateOrResetCounter = (updateOrReset) => {
        console.log("Counter.updateOrResetCounter" + updateOrReset);
        if (updateOrReset === 0) {
            this.setState({
                    counterValue: 0
            });
        } else {
                this.setState( (prevState) => {
                        return({
                                counterValue: prevState.counterValue + 1
                        })
                });
        }
    }


    incrementCounter = () => {
        // console.log("Zwiekszam");
        this.setState( (prevState) => {
            return({
                counterValue: prevState.counterValue + 1
            })
        });
    }

    render() {
        // let imie = "Eryk";
        // let nazwisko = "Janusz";
        return(
            <div className="counter">
            <Display currentValue={this.state.counterValue} />
            <ButtonsPanel updateOrResetMethod={this.updateOrResetCounter} />
                 {/* Licznik {imie} {nazwisko} {Date.now()}
                 Licznik - <span className="value">{this.state.counterValue}</span>
                 <button onClick={this.incrementCounter}>Zwiększ o 1</button> */}

            </div>
        )
    }
}

// ES5
// function Counter() {}

// ES6
// const Counter = () => {
//     return(
//         <div id="counter">Licznik Jan</div>
//     )
// }

export default Counter;