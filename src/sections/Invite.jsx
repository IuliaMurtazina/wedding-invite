import { baseUrl } from "../heplers/utils";
import classes from "./Invite.module.scss";

const Invite = () => {
  return (
    <section
      className={classes.section}
      id="invite"
    >
      <div className={classes.wrapper}>
        <div
          className={classes.container}
          data-aos="slide-up"
        >
          <h2 className={`section-title`}>Дорогие гости!</h2>
          <p>
            Мы рады сообщить Вам, что 03.08.2025 состоится самое главное
            торжество в нашей жизни - день нашей свадьбы! Приглашаем Вас
            разделить с нами радость этого незабываемого дня.
          </p>
        </div>
        <div className={classes.pics}>
          <img
            src={`${baseUrl}img/pic-1.jpg`}
            data-aos="zoom-in"
            data-aos-delay="400"
          />
          <img
            src={`${baseUrl}img/pic-2.jpg`}
            data-aos="zoom-in"
            data-aos-delay="600"
          />
        </div>
      </div>
    </section>
  );
};

export default Invite;
