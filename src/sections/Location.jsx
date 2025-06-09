import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import classes from "./Location.module.scss";

const Location = () => {
  const coordinates = [55.948917, 37.416404];

  return (
    <section
      style={{ width: "100%" }}
      id="location"
      className={classes.section}
    >
      <h2 className={`section-title`}>Локация</h2>

      <p>
        Наша свадьба пройдет загородном парк-отеле <b>Sheraton Skypoint Luxe</b>
        ,
        <br /> г. Москва, Международное шоссе., 28Б, стр. 5
      </p>


    </section>
  );
};

export default Location;
