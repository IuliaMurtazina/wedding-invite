import { baseUrl } from "../heplers/utils";
import classes from "./Main.module.scss";

const Main = () => {
  return (
    <section
      className={classes.main}
      id="main"
      data-aos="fade-in" 
      data-aos-transition="2000"
    >
      <div className={classes["main__container"]}>
        <p>
          приглашаем вас <br /> на нашу свадьбу
        </p>
        <div className={classes["title-container"]}>
          <div className={classes.title}>
            <span>Роман</span>
            <span>&</span>
            <span>Юлия</span>
          </div>

          <img
            src={`${baseUrl}img/title-bg.png`}
            className={classes["main__image"]}
          />
        </div>
        <div className={classes.date}>
          <span>вс.</span>
          {/* <span>воскресенье</span> */}
          <div>
            <span>август</span>
            <span className={`${classes["date-main"]} colored-text`}>03</span>
            <span>2025</span>
          </div>
          <span>15:00</span>
        </div>
      </div>{" "}
      <img
        src={`${baseUrl}img/main-image.jpg`}
        className={classes["main__bg"]}
      />
    </section>
  );
};

export default Main;
