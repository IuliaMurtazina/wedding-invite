import { baseUrl } from "../../heplers/utils";
import classes from "./DressCode.module.scss";
import Slider from "./Slider/Slider";

const DressCode = () => {
  return (
    <section
      className={classes.section}
      id="dress-code"
    >
      <div className={classes["wrapper-container"]}>
        <div className={`${classes.wrapper} ${classes["top-wrapper"]}`}>
          <h2 className={`section-title`}>Дресс-код</h2>
          <div className={`${classes.container} ${classes.hero}`}>
            <img
              src={`${baseUrl}img/color-1.jpg`}
              data-aos="zoom-in"
              className={classes.color}
            />
            <div className={classes["container-text"]}>
              <p>
                Мы постарались продумать каждую деталь, чтобы сделать этот день
                стильным и красивым.
              </p>
              <p>
                Чёрно-белые оттенки стали основой нашей концепции — сдержанно,
                стильно, со вкусом.
              </p>
              <p>
                <b>
                  Просим вас поддержать стиль торжества и выбрать наряды в этой
                  цветовой гамме
                </b>
              </p>
            </div>
            <img
              src={`${baseUrl}img/color-2.jpg`}
              data-aos="zoom-in"
              className={classes.color}
            />
          </div>
        </div>
        <div className={`${classes.wrapper} ${classes["bottom-wrapper"]}`}>
          <div className={classes["main-text"]}>
            <p>
              <b>
                Немного вдохновения для тех, кто хочет выглядеть уместно и
                стильно в выбранной нами цветовой гамме.
              </b>
            </p>
            <p>
              Мы ориентируемся на классические образы или лёгкий кэжуал — без
              строгих рамок, но и без пляжной неформальности.
            </p>
            <p>
              Фотографии ниже — не строгий регламент, а просто визуальные
              подсказки :)
            </p>
          </div>
          <div className={`${classes.container} ${classes.pics}`}>
            <div
              className={classes.woman}
              data-aos="fade-in"
            >
              <Slider
                data={[
                  {
                    img: "woman-2",
                    text: "Цвета можно комбинировать как угодно",
                  },
                  { img: "woman-1", text: "Total Black" },
                  {
                    img: "woman-3",
                    text: "Не слишком нарядное белое платье :)",
                  },
                ]}
              />
            </div>
            <div
              className={classes.man}
              data-aos="fade-in"
            >
              <Slider
                data={[
                  {
                    img: "man-2",
                    text: "Цвета можно комбинировать как угодно",
                  },
                  { img: "man-1", text: "Total Black" },
                  { img: "man-3", text: "Лёгкий casual" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
