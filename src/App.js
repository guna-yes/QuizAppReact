import React, { useState } from 'react';
// import Axios from "axios";

export default function App() {

  // Axios({
  //   method: "GET",
  //   url: "http://localhost:3000/quiz",

  // }).then(res => {
  //   console.log(res.question);
  // });
  const questions = [
    {
      questionText: 'What is the capital of Franc?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        {
          answerText: 'Jeff Bezos',
          isCorrect: false
        },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-2">Quiz App</h1>
        <p>Choose quiz of your Choice!!!!</p>

      </div>
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
                    <h3 className="display-4">{questions[currentQuestion].questionText}</h3></div>

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
