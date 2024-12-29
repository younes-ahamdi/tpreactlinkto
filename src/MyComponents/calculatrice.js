import './Calculatrice.css';
import { useState } from 'react';

function Calculatrice() {
  return (
    <div className="App">
      <div className="calculator-app">
        <Calculator />
      </div>
    </div>
  );
}

const Calculator = () => {
  const [input, setInput] = useState('0');

  const getDisplay = () => {
    const sections = input.split(/[\+\-\*\/]/);
    if (sections[sections.length - 1] === '') {
      sections.pop();
    }
    return sections[sections.length - 1];
  };

  const handleNumberClick = (char) => {
    if (input !== '0' || char === '.') {
      setInput(`${input}${char}`);
    } else {
      setInput(char);
    }
  };

  const handleOperationClick = (operation) => {
    const sections = input.split(/([+\-*/])/);
    const last_element = sections[sections.length - 1];
    if ('+-*/'.includes(last_element)) {
      const input_removed_last = sections.slice(0, -2).join('');
      setInput(`${input_removed_last}${operation}`);
    } else {
      setInput(`${input}${operation}`);
      handleEquals(`${input}${operation}`);
    }
  };

  const handleEquals = (input) => {
    const isNum = (str) => {
      return str !== '' && !isNaN(str) && !isNaN(parseFloat(str));
    };
    const sections = input.split(/([+\-*/])/);
    if (sections.length > 2) {
      if (isNum(sections[0]) & isNum(sections[2]) & '+-*/'.includes(sections[1])) {
        const answer = eval(sections.slice(0, 3).join(''));
        const rest_of_input = sections.slice(3).join('');
        setInput(`${answer}${rest_of_input}`);
      }
    }
  };

  const handleClear = () => {
    setInput('0');
  };

  return (
    <div className="Calculator">
      <div className="answer-section">
        <h1 className="answer">{getDisplay()}</h1>
      </div>
      <div className="button-section">
        <div className="button-row">
          <CalculatorButton shape="circle" color="light-gray" text="AC" handleClick={handleClear} />
          <CalculatorButton shape="circle" color="light-gray" text="+/-" />
          <CalculatorButton shape="circle" color="light-gray" text="%" />
          <CalculatorButton shape="circle" color="orange" text="/" handleClick={() => handleOperationClick('/')} />
        </div>
        <div className="button-row">
          <CalculatorButton shape="circle" color="gray" text="7" handleClick={() => handleNumberClick('7')} />
          <CalculatorButton shape="circle" color="gray" text="8" handleClick={() => handleNumberClick('8')} />
          <CalculatorButton shape="circle" color="gray" text="9" handleClick={() => handleNumberClick('9')} />
          <CalculatorButton shape="circle" color="orange" text="*" handleClick={() => handleOperationClick('*')} />
        </div>
        <div className="button-row">
          <CalculatorButton shape="circle" color="gray" text="4" handleClick={() => handleNumberClick('4')} />
          <CalculatorButton shape="circle" color="gray" text="5" handleClick={() => handleNumberClick('5')} />
          <CalculatorButton shape="circle" color="gray" text="6" handleClick={() => handleNumberClick('6')} />
          <CalculatorButton shape="circle" color="orange" text="-" handleClick={() => handleOperationClick('-')} />
        </div>
        <div className="button-row">
          <CalculatorButton shape="circle" color="gray" text="1" handleClick={() => handleNumberClick('1')} />
          <CalculatorButton shape="circle" color="gray" text="2" handleClick={() => handleNumberClick('2')} />
          <CalculatorButton shape="circle" color="gray" text="3" handleClick={() => handleNumberClick('3')} />
          <CalculatorButton shape="circle" color="orange" text="+" handleClick={() => handleOperationClick('+')} />
        </div>
        <div className="button-row">
          <CalculatorButton shape="rectangle" color="gray" text="0" handleClick={() => handleNumberClick('0')} />
          <CalculatorButton shape="circle" color="gray" text="." handleClick={() => handleNumberClick('.')} />
          <CalculatorButton shape="circle" color="orange" text="=" handleClick={() => handleEquals(input)} />
        </div>
      </div>
    </div>
  );
};

const CalculatorButton = ({ color, shape, text, handleClick }) => {
  let text_color;
  color === 'light-gray' ? (text_color = 'text_black') : (text_color = 'text_white');

  return (
    <div onClick={handleClick} className={`calculator-button ${color} ${shape} ${text_color}`}>
      <h3 className="button-text">{text}</h3>
    </div>
  );
};

export default Calculatrice;
