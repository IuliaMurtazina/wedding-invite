import { useEffect, useState } from "react";
import classes from "./Timer.module.scss";

const TimerItem = ({ label, value }) => {
  const pad2 = (n) => String(n).padStart(2, "0");
  const [tens, units] = pad2(value);

  return (
    <div className={classes.item}>
      <div>
        <span>{tens}</span>
        <span>{units}</span>
      </div>
      <span>{label}</span>
    </div>
  );
};

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-08-03T15:00:00");

    const updateTime = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
      const minutes = Math.floor((totalSeconds / 60) % 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={classes.section}
      id="timer"
      data-aos="fade-in"
      data-aos-delay="500"
    >
      <h2 className="section-title">
        До нашей свадьбы <br /> осталось
      </h2>
      <div className={classes.timer}>
        <TimerItem
          label="дней"
          value={timeLeft.days}
        />
        <TimerItem
          label="часов"
          value={timeLeft.hours}
        />
        <TimerItem
          label="минут"
          value={timeLeft.minutes}
        />
        <TimerItem
          label="секунд"
          value={timeLeft.seconds}
        />
      </div>
    </section>
  );
};

export default Timer;
