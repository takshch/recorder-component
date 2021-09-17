import { useState, useEffect } from "react";
import useInterval from "use-interval";

const CountUpTimer = ({ time, onExpire, onStart }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [timerTime, setTimerTime] = useState(null);

  useEffect(() => {
    setTimerTime({
      seconds: time.seconds || 0,
      minutes: time.minutes || 0,
    });
  }, []);

  const pause = () => {
    setIsRunning(false);
  };

  const checkTimeCompletion = () => {
    if (timerTime.seconds <= seconds && timerTime.minutes <= minutes) {
      pause();
      setIsCompleted(true);
      onExpire && onExpire({ seconds, minutes });

      return true;
    }
  };

  const countUp = () => {
    if (!checkTimeCompletion()) {
      setSeconds(seconds + 1);
      if (seconds === 60) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }
  };

  const StartTimer = () => {
    onStart && onStart();
  };

  useInterval(countUp, isRunning ? 1000 : false, true);

  const restart = () => {
    setSeconds(0);
    setMinutes(0);

    setIsCompleted(false);
    setIsRunning(true);
  };

  const start = () => {
    setIsRunning(true);
  };

  return {
    minutes,
    seconds,
    pause,
    restart,
    start,
    isCompleted,
  };
};

export default CountUpTimer;
