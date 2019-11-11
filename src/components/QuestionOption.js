import React from 'react';
import './style.css';

function QuestionOption(props){
    let optionValue = props.value;

    return(
        <div className="radio" onClick={()=> props.scoreQuestion(props.value)}>
          
            <p>  <input type ='radio'/>{optionValue}</p>
        </div>
    )
       
    
}
export default QuestionOption;