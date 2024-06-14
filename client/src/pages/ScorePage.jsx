import React from 'react'
import { useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { UPDATE_HIGH_SCORE } from '../utils/mutation';
import { useParams } from 'react-router-dom';

export default function Scores() {
    const { score } = useParams()
    const [addHighScore, { error }] = useMutation(UPDATE_HIGH_SCORE)
    const [highScore, setHighScore] = useState(0)

    useEffect(() => {
        const updateHighScore = async () => {
            try {
                if (score > 0) {
                    const { data } = await addHighScore({ variables: { score } })
                    // console.log(userScore)
                    setHighScore(data.addHighScore.highScore)
                }
            } catch (err) {
                console.error(err);
            }
        };
        updateHighScore();
    }, [score]);

    return (
        <div>
            <h1>
                Your Current Score is: {score}
                <br />
                Your High Score: {highScore}
                <br />
                Add Some Thoughts To Your Quiz! :
                
            </h1>
        </div>
    )
}
