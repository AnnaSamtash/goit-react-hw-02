import { useState, useEffect } from 'react';
import './App.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

function App() {
  const [states, setState] = useState(() => {
    const savedStates = window.localStorage.getItem('saved-states');
    if (savedStates !== null) {
      return JSON.parse(savedStates);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-states', JSON.stringify(states));
  }, [states]);

  const { good, neutral, bad } = states;

  const updateFeedback = feedbackType => {
    setState({
      ...states,
      [feedbackType]: states[feedbackType] + 1,
    });
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedbackStat = Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        total={totalFeedback}
        setState={setState}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positive={positiveFeedbackStat}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
