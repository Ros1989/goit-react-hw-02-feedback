import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification/';

export default class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerFeedbackButton = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, elem) => {
      return (acc += elem);
    }, 0);
  }

  countPositiveFeedbackPercentage(total, good) {
    return Math.round((good * 100) / total);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(total, good);
    return (
      <>
        <Section title="Please leave feedback"></Section>
        <FeedbackOptions onLeaveFeedback={this.handlerFeedbackButton} />
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <Notification title="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
