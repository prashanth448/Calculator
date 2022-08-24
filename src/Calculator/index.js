import {Component} from 'react'
import './index.css'

class Calculator extends Component {
    state = {input:""}

    inputValue = (event) => {
        this.setState(prevState => {
            return {input:prevState.input + event.target.value}
        })
    }

    numButton = (event) => {
        this.setState(prevState => {
            return {input:prevState.input + event.target.value}
        })
    }

    clearInput = () => {
        this.setState({input:""})
    }

    operator = (event) => {
        const {input} = this.state

        if (input !== "" && input.length > 0) {
            let lastChar  = input.charAt(input.length - 1)
            if (lastChar.match(/[0-9]/)) {
                this.setState(prevState => {
                    return {input:prevState.input + event.target.value}
                })
            }
        }
    }

    resultBtn = () => {
        const {input} = this.state
        this.setState({input:eval(input)})
    }

    render () {
        const {input} = this.state
        return (
            <div className='calculator'>
                <div>
                    <div>
                        <input className='input-card' type='text' value={input} onChange={this.inputValue} />
                    </div>
                    <div>
                        <div>
                            <button className='operator' value="+"  onClick={this.operator}>+</button>
                            <button className='operator' value="-" onClick={this.operator}>-</button>
                            <button className='operator' value="*" onClick={this.operator}>X</button>
                            <button className='operator' value="/" onClick={this.operator}>/</button>
                        </div>
                    
                        <div className='button-card'>
                            <div>
                                <button value="7"  onClick={this.numButton} className='operator'>7</button>
                                <button value="8"  onClick={this.numButton} className='operator'>8</button>
                                <button value="9"  onClick={this.numButton} className='operator'>9</button><br/>
                                <button value="4"  onClick={this.numButton} className='operator'>4</button>
                                <button value="5"  onClick={this.numButton} className='operator'>5</button>
                                <button value="6"  onClick={this.numButton} className='operator'>6</button><br/>
                                <button value="1"  onClick={this.numButton} className='operator'>1</button>
                                <button value="2"  onClick={this.numButton} className='operator'>2</button>
                                <button value="3"  onClick={this.numButton} className='operator'>3</button><br/>
                                <button value="0"  onClick={this.numButton} className='operator'>0</button>
                                <button value="."  onClick={this.numButton} className='operator'>.</button>
                                <button onClick={this.clearInput} className='operator clear-button'>Clear</button>
                            </div>

                            <div>
                                <button className='equal-button' onClick={this.resultBtn}>=</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator
