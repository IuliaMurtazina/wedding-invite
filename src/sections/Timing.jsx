import { baseUrl } from "../heplers/utils";
import classes from "./Timing.module.scss";

const Timing = () => {
  return (
    <section
      className={classes.section}
      id="timing"
    >
      <h2 className={`section-title`}>Программа</h2>
      <div className={classes.container}>
        <div className={classes.time}>
          <span>15:00 - </span>
          <p>сбор гостей</p>
        </div>
        <div className={classes.time}>
          <span>15:30 - </span>
          <p>церемония регистрации</p>
        </div>
        <div className={classes.time}>
          <span>16:30 - </span>
          <p>банкет</p>
        </div>
      </div>
    </section>
  );
};

export default Timing;
