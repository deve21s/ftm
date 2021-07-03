import { useState } from "react";

function Deshboard() {
  const [countdown, setCountdown] = useState(10);

  let interval;

  startTimer();

  function startTimer() {
    interval = setInterval(() => {
      if (countdown > 0) setCountdown(countdown - 1);
      else {
        clearInterval(interval);
      }
    }, 1000);
  }

  return (
    <div>
      <h1>Countdown: {countdown}</h1>
    </div>
  );
}

export default Deshboard;
