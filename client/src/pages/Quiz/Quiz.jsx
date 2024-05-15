import React, { useRef, useState } from "react";
import "./Quiz.scss";
// import data
import { html, css, javascript, links } from "../../utils/data";
// React Router DOM
import { useParams, useNavigate } from "react-router-dom";
// Code snippet
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
// finish test confetti
import ConfettiExplosion from "react-confetti-explosion";
// typewriter effect
import TypeWriterEffect from "react-typewriter-effect";

const Quiz = () => {
  const navigate = useNavigate();

  const params = useParams();
  const paramNumber = params["tehnologie"];

  // technology for the quiz
  let technology =
    Number(paramNumber) === 1
      ? html
      : Number(paramNumber) === 2
      ? css
      : Number(paramNumber) === 3
      ? javascript
      : html;

  let [index, setIndex] = useState(randomNumber);
  // random question
  let [question, setQuestion] = useState(technology[index]);
  // to keep the order of the question (from 1 to 15 for example)
  let [questionCount, setQuestionCount] = useState(1);
  // variable that helps us to lock the first clicked answer
  let [lock, setLock] = useState(false);
  // for not repeating
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  // show the explanation after clicking
  let [showExplanation, setShowExplanation] = useState(false);

  // make a reference for each option element
  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let optionArr = [Option1, Option2, Option3, Option4];

  // generate random number for random order of questions
  function randomNumber() {
    let index = Math.floor(Math.random() * technology.length);
    return index;
  }

  const checkAnswer = (e, userAnswer) => {
    setShowExplanation(true);

    if (lock === false) {
      if (question.answer === userAnswer) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        // point to the element with the correct answer and add the "correct" class
        optionArr[question.answer - 1].current.classList.add("correct");
      }
    }
  };

  const nextQuestion = () => {
    // console.log(html.length + css.length + javascript.length);
    setShowExplanation(false);

    if (lock) {
      if (questionCount === 15) {
        setResult(true);
        return 0; // if we return 0, the next statements won't be executed
      }

      setIndex(randomNumber);
      // made this because everytime the first two questions are the same (idk why :( I really tried but nothing..so I came with this solution)
      let newIndex = randomNumber();

      if (newIndex === index || questionCount === 1) {
        // setIndex(newIndex);
        index = newIndex;
      }

      setQuestion(technology[index]);
      setQuestionCount((prev) => prev + 1);
      setLock(false);

      optionArr.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const resetQuiz = () => {
    setQuestionCount(1);
    setIndex(randomNumber);
    setQuestion(technology[index]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  const redirectToPage = (page) => {
    navigate(page); // Redirecționează utilizatorul către pagina specificată
    window.location.reload();
  };

  return (
    <div className="quiz">
      {result && (
        <div className="confetti">
          <ConfettiExplosion particleCount={200} duration={4000} />
        </div>
      )}
      <div className="wrapper">
        <div className="quiz-wrapper">
          <div className="quiz-container">
            {result ? (
              <div className="quiz-final">
                <h3>Ai raspuns corect la {score} intrebari din 15. </h3>
                <button className="second-btn" onClick={resetQuiz}>
                  <span className="button-top">Incearca din nou</span>
                </button>
              </div>
            ) : (
              <>
                <div className="question-title">
                  <h3>{questionCount}/15.</h3>
                  <h3>{question.question}</h3>
                </div>
                {question.code && (
                  <div className="code-snippet">
                    <SyntaxHighlighter
                      className="code-snippet"
                      language="javascript"
                      style={atomOneDark}
                    >
                      {question.code}
                    </SyntaxHighlighter>
                  </div>
                )}
                <ul>
                  <li
                    ref={Option1}
                    onClick={(e) => {
                      checkAnswer(e, 1);
                    }}
                  >
                    {question.option1}
                  </li>
                  <li
                    ref={Option2}
                    onClick={(e) => {
                      checkAnswer(e, 2);
                    }}
                  >
                    {question.option2}
                  </li>
                  <li
                    ref={Option3}
                    onClick={(e) => {
                      checkAnswer(e, 3);
                    }}
                  >
                    {question.option3}
                  </li>
                  <li
                    ref={Option4}
                    onClick={(e) => {
                      checkAnswer(e, 4);
                    }}
                  >
                    {question.option4}
                  </li>
                </ul>
                <div className="btn-container">
                  <button className="main-btn" onClick={nextQuestion}>
                    <span>Next</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="exlanation-wrapper">
          <div className="explanation-container">
            <ul className="explanation-nav">
              <li key={index}>
                <button
                  onClick={() => redirectToPage(`/`)}
                  className="link-btn home"
                >
                  Acasă
                </button>
              </li>
              {links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => redirectToPage(`${link.link}`)}
                    className="link-btn"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="explanation-text">
              {showExplanation && (
                <div className="display-linebreak">
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "Poppins",
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                    text={question.explanation}
                    typeSpeed={30}
                    hideCursorAfterText={true}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
