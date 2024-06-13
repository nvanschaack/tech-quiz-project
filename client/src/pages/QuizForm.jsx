import React from 'react';
import { QUERY_ALL_QUIZZES } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

export default function QuizForm() {
    const [quizForm, setQuizForm] = useState()
    const { loading, data } = useQuery(QUERY_ALL_QUIZZES)
    // console.log(data);
    useEffect(() => {
        //imeediately on page load, console.log returns undefined
        console.log(data);
    }, [loading])

    return (
        <div>
            <p>Quiz Here!</p>
            <div>
                <form>
                    {loading ? <h1>loading</h1> : data.quizzes.map((option, index) => {
                        return (
                            <div key={index}>
                                <label>{option.question}</label>
                                {option.options.map((answer, index) => (
                                    <fieldset>
                                        <label>
                                            <input
                                                type="radio"
                                                value={answer}
                                            />{answer}
                                        </label>
                                    </fieldset>
                                ))}
                            </div>
                        )
                    })}
                    <br />
                    <button type='submit'>SUBMIT QUIZ</button>
                </form>
            </div>
        </div>
    )
}