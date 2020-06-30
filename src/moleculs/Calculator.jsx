import React, {useState} from 'react'
import Button from '../atoms/Button'


function Calculator () {
    const btn = ['clear', '.', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '='];
    const [input, setInput] = useState('')
    const operators = ['/', '+','-','*','.']
    const isValueOperator = ['/', '+','-','*','.'].includes(input[input.length -1])

    const addSymbol = (item) => {
        
        if(!isValueOperator) {
            setInput(input + item)
        } else {
            operators.includes(item) ? setInput(input.substr(0, input.length -1) + item) : setInput (input + item)
            return;
        }
        if ((input === '') && (item === '=')) {
            setInput('');
            return;
        } else if (item === 'clear') {
            setInput('');
        } else {
            setInput(input + item)
        }
        try{
            if(item === "=") {
                let x = eval(input);
                setInput(x);
                return;
            }
        } catch (e) {
            setInput('Error')
        }
        return;
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    
    return (

        <div className="calculator_container">

            <input className="output" value={input} onChange={handleChange}></input>

            {btn.map((item) => {
                return (<Button item={item} handleClick={addSymbol}/>);
            })}
            
        </div>
    );
}

export default Calculator