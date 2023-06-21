import React, {Component} from 'react'
import './Calculator.css'
import '../Components/Button.jsx'
import Button from '../Components/Button.jsx'


export class Calculator extends Component{
    render(){
        return(
            <div className='calculator'>
                <Button></Button>

            </div>
        )
    }
}