import React, { useState, useEffect } from 'react';
import Display from './Display';

export default function Sports() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [questions, setquestions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3009/sports")
            .then(res => res.json())
            .then((result) => {
                setquestions(result);
                console.log(result)

            }
            )
    }, [])
    function handleAnswerOptionClick(isCorrect) {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }
    console.log(questions)
    if (!questions.length) return null;

    return (
        <div>
        <Display/>
           
            <div className='container'>
                {showScore ? (
                    <h1 className="display-1">
                        You scored {score} out of {questions.length}
                    </h1>
                ) : (
                        <>
                            <div className="row">
                                <div className="col-6">
                                    <div className=" col-12 shadow-lg p-5 mb-4 bg-info text-white  text-black text-center rounded ">
                                        <h1 className="display-5">Question {currentQuestion + 1}/{questions.length}</h1>

                                        <h3 className="display-4">{questions[currentQuestion].questionText}</h3>
                                    </div>
                                </div>
                                <div className="col-6">
                                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                                        <button className=" col-12  p-3 mb-3  bg-white text-black   text-center rounded "
                                            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="row">
                            </div>
                        </>
                    )}
            </div>
        </div>
    )
};




