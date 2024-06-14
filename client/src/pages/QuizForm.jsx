import React from 'react';
import { QUERY_ALL_QUIZZES } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

export default function QuizForm() {
    const [quizForm, setQuizForm] = useState()
    const [score,setScore]= useState(0);
    
    const { loading, data } = useQuery(QUERY_ALL_QUIZZES)
    // console.log(data);
    useEffect(() => {
        //imeediately on page load, console.log returns undefined
        //console.log(data);
    }, [loading])
    const handleOptionChange = (answer,index) => {
        console.log(index);
       if(answer===data.quizzes[index].correctAnswer)
        {
            setScore(score+1);
        }
      
      };

      const displayScore=()=>
        {
            alert(`your score is ${score}`);
        };
      
    return (
        <div>
            <p>Quiz Here!</p>
            <div>
                <form>
                    {loading ? <h1>loading</h1> : data.quizzes.map((option, questionindex) => {
                        return (
                            <div key={questionindex}>
                                <label>{option.question}</label>
                           
                                {option.options.map((answer, answerIndex) => (
                                    <fieldset>
                                        <label>
                                            <input
                                                type="radio"
                                                value={answer}
                                                name="quizAnswer"
                                                onChange={()=>handleOptionChange(answer,questionindex)}
                                            />{answer}
                                            
                                        </label>
                                    </fieldset>
                                ))}
                            </div>
                        )
                    })}
                    <br />
                    <button type='submit' onClick={displayScore}>SUBMIT QUIZ</button>
                   
                </form>
            </div>
        </div>
    )
}
