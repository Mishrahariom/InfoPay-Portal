import { useMemo } from "react";
import "./QuestionUnit.css";

const QuestionUnit = ({
  plus,
  hereAreSomeOfOurMostAsked,
  absolutelyWeHaveDeveloped,
  answer,
  propHeight,
  propHeight1,
}) => {
  const answerStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const absolutelyWeHaveStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div className="question-unit3">
      <div className="plus-icon1">
        <div className="question">
          <img className="plus-icon2" alt="" src={plus} />
          <div className="here-are-some">{hereAreSomeOfOurMostAsked}</div>
        </div>
        {!answer && (
          <div className="answer" style={answerStyle}>
            <div className="absolutely-we-have" style={absolutelyWeHaveStyle}>
              {absolutelyWeHaveDeveloped}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionUnit;
