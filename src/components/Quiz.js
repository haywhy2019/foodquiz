import React, {Component} from 'react';
import QuestionGenerator from "../utils/QuestionGenerator";
import Question from './Question';
import Result from './Result';
import './style.css';




class Quiz extends Component{
    constructor(){
        super();
        this.state={
            questionList: QuestionGenerator(),
            questionIndex: 0,
            score:0
        }
        this.showContent= this.showContent.bind(this);
        this.scoreQuestion = this.scoreQuestion.bind(this);
    }

    showContent(){
        
        if(this.state.questionIndex< this.state.questionList.length){
            return<Question content = {this.state.questionList[this.state.questionIndex]} scoreQuestion={this.scoreQuestion}/> 
        }
        return(
            <Result score ={this.state.score}/>
        )
      
    }
    
    scoreQuestion(value){
        console.log('score is', value)
        //grade answer
       
        //increase question index state
        let question = this.state.questionList[this.state.questionIndex];
        this.setState((state)=>{
            return{...state.questionIndex++}
        })
         //increase state score
         if(value ==question.Answer){
            this.setState((state)=>{
                return{...state.score++}
            })
             
         }
    }




    render(){
        return(
            <div className="whole">
                <div className="overlay">

             
            <div className="question">
                <h1>Are you a foodie</h1>
                {this.showContent()}
            </div>
            </div>
            </div>
        )
    }
}
export default Quiz;