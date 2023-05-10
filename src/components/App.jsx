import { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics"

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
 handleFeedback = (nameButton) => {
  this.setState((prevState) => ({
    [nameButton]: prevState[nameButton] + 1,
  }));
  };


  render() {
     const { good, neutral, bad } = this.state;
    return (
       <>
      <Section title="Please, leave feedback" />
      <FeedbackOptions
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={this.handleFeedback}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
    )
  }
}


export default App;

