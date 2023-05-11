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
    [nameButton]: prevState[nameButton] + 1, //nameButton є динамічною змінною, яка представляє назву кнопки, синтвксис в []
  }));
 };
  
countTotalFeedback = () => {  //код обчислює суму змінних good, neutral і bad:
  const { good, neutral, bad } = this.state;
  const total = good + neutral + bad;
  return total;
}
  
countPositiveFeedbackPercentage = () => {//код обчислює відсоток позитивних відгуків
  const totalFeedback = this.countTotalFeedback();

  if (totalFeedback === 0) {
    return 0;
  }

  const positivePercentage = (good / totalFeedback) * 100;
  return `${Math.round(positivePercentage)}%`;
}
  
  


  render() {
     const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please, leave feedback" >
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleFeedback}/>
          <Statistics good={good} neutral={neutral} bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}>
          </Statistics>
          
        </Section>
      </>
    )
  }
}


export default App;

