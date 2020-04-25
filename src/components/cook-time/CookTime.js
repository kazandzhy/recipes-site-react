import React, { Component } from "react";
import { Button } from "../ui";

import s from "./CookTime.module.css";

export default class CookTime extends Component {
  state = {
    classNames: `${s.TimeInfo} ${s.Hide}`,
    seconds: 0,
    minutes: this.props.cookTime,
    isPause: false,
    isStart: false,
    cookingTime: 0,
    interval: 0,
  };

  counter = () => {
    if (this.state.minutes === 0 && this.state.seconds === 0) {
      this.setState({
        interval: clearInterval(this.state.interval),
      });
      return;
    }

    if (this.state.seconds === 0) {
      this.setState({
        seconds: 59,
        minutes: this.state.minutes - 1,
      });
      return;
    }

    this.setState({
      seconds: this.state.seconds - 1,
    });
  };

  pauseTimer = () => {
    // user can not press pause and continue before start
    if (this.state.isStart) {
      this.setState({
        interval: clearInterval(this.state.interval),
        isPause: true,
        isStart: false,
      });
    }
  };

  startTimer = () => {
    this.setState((state) => {
      return {
        interval: clearInterval(state.interval),
      };
    });

    setTimeout(() => {
      this.setState({
        classNames: `${s.TimeInfo}`,
      });

      this.setState({
        minutes: this.props.cookTime,
        seconds: 0,
      });
    }, 1);

    this.setState(() => {
      return {
        isStart: true,
        isPause: false,
        interval: setInterval(this.counter, 1000),
      };
    });
  };

  continueTimer = () => {
    if (this.state.isPause) {
      this.setState({
        interval: setInterval(this.counter, 1000),
        isPause: false,
        isStart: true,
      });
    }
  };

  render() {
    const { classNames, minutes, seconds } = this.state;
    const { cookTime } = this.props;
    let minutesFormatted = minutes;
    let secondsFormatted = seconds;
    let cookTimeFormatted = `${cookTime} minutes`;

    if (minutes >= 0 && minutes <= 9) {
      minutesFormatted = `0${minutes}`;
    }

    if (seconds >= 0 && seconds <= 9) {
      secondsFormatted = `0${this.state.seconds}`;
    }

    if (cookTime === 60) {
      cookTimeFormatted = "1 hour";
    }

    if (cookTime > 60) {
      cookTimeFormatted = `1hour ${cookTime - 60} minutes`;
    }

    const timerContent = `${minutesFormatted}min : ${secondsFormatted}sec`;
    return (
      <div className={s.cookTime}>
        <p>Cook Time: {cookTimeFormatted}</p>
        <Button text="Start" onClick={this.startTimer} className={s.Start} />
        <Button text="Pause" onClick={this.pauseTimer} className={s.Pause} />
        <Button
          text="Continue"
          onClick={this.continueTimer}
          className={s.Continue}
        />
        <div className={classNames}>
          <span>{timerContent}</span>
        </div>
      </div>
    );
  }
}
