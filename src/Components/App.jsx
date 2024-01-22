import { useState, useEffect } from "react";
import "../Components/App.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import Button from "./Button/Button";
import SmileyComponent from "./SmileyComponent/SmileyComponent";

// ...

const INITIAL_FEEDBACK_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return INITIAL_FEEDBACK_STATE;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const feedbackKeys = Object.keys(feedback);

  const handleButtonClick = (key) => {
    setFeedback({
      ...feedback,
      [key]: feedback[key] + 1
    });
  };

  const handleResetFeedback = () => {
    setFeedback(INITIAL_FEEDBACK_STATE);
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage =
    totalFeedback > 0
      ? Math.round(((good + neutral) / totalFeedback) * 100)
      : 0;

  return (
    <>
      <Description title="Sip Happens Café">
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </Description>
      <Options buttons={feedbackKeys} onClick={handleButtonClick}>
        {totalFeedback > 0 && (
          <Button variant="reset" name="reset"onClick={handleResetFeedback} />
        )}
      </Options>
      {totalFeedback ? (
        <Statistics  
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positive={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
      <SmileyComponent moodNumber={positiveFeedbackPercentage} />
    </>
  );
};

export default App;
