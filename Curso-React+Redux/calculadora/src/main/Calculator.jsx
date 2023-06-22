import React, {Component} from 'react'
import './Calculator.css'
import '../Components/Button.jsx'
import Button from '../Components/Button.jsx'
import Display from '../Components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export class Calculator extends Component{
    
    state = { ...initialState}

    constructor(props){
        super(props)

        this.clearHistory = this.clearHistory.bind()
        this.addDigit = this.addDigit.bind()
        this.setOperation = this.setOperation.bind()
    }

    clearHistory = () => {
        this.setState({...initialState})
    }

    addDigit = (n) => {
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }

        const clearDisplay = this.state.displayValue === '0'
        || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay: false})
        
        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
            console.log(values)
        }

    }

    setOperation (operation) {
        console.log(operation)
    }

    render(){
        return(
            <div className='calculator'>
                <Display value={this.state.displayValue}></Display> 
                <Button label="AC" click={this.clearHistory} triple></Button>
                <Button label="/" click={this.setOperation} operation></Button>
                <Button label="7" click={this.addDigit}></Button>
                <Button label="8" click={this.addDigit}></Button>
                <Button label="9" click={this.addDigit}></Button>
                <Button label="*" click={this.setOperation} operation></Button>
                <Button label="4" click={this.addDigit}></Button>
                <Button label="5" click={this.addDigit}></Button>
                <Button label="6" click={this.addDigit}></Button>
                <Button label="-" click={this.setOperation} operation></Button>
                <Button label="1" click={this.addDigit}></Button>
                <Button label="2" click={this.addDigit}></Button>
                <Button label="3" click={this.addDigit}></Button>
                <Button label="+" click={this.setOperation} operation></Button>
                <Button label="0" click={this.addDigit} doble></Button>
                <Button label="." click={this.addDigit}></Button>
                <Button label="=" click={this.setOperation} operation></Button>


            </div>
        )
    }
}