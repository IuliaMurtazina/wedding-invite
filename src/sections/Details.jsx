import classes from "./Details.module.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const Details = () => {
  const coordinates = [55.948917, 37.416404];

  return (
    <section
      className={classes.section}
      id="details"
    >
      <div className={classes.container}>
        <div className={classes.timing}>
          <h2 className={`section-title`}>Программа</h2>
          <div className={`${classes.program} ${classes.bg}`} data-aos="slide-right">
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
        </div>

        <div className={classes.location}>
          <h2 className={`section-title`}>Локация</h2>
          <div className={`${classes.text} ${classes.bg}`} data-aos="slide-left">
            <p>
              Наша свадьба пройдет загородном парк-отеле{" "}
              <b>Sheraton Skypoint Luxe</b>
              ,
              <br /> г. Москва, Международное шоссе., 28Б, стр. 5
            </p>
          </div>
        </div>
      </div>

      <div className={classes["map-container"]}>
        <YMaps>
          <div className={classes.map}>
            <Map
              defaultState={{ center: coordinates, zoom: 12 }}
              width="100%"
              height="100%"
              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              options={{ suppressMapOpenBlock: true }}
            >
              <Placemark
                geometry={coordinates}
                properties={{
                  hintContent: "Sheraton Skypoint Luxe", // появляется при наведении
                  balloonContentHeader: "Sheraton Skypoint Luxe",
                  balloonContentBody:
                    "г. Москва, Международное шоссе., 28Б, стр. 5",
                  balloonContentFooter:
                    '<a href="https://yandex.ru/maps/?rtext=~55.948917, 37.416404" target="_blank">Как добраться</a>',
                }}
                options={{
                  preset: "islands#redDotIcon", // можно изменить стиль метки
                }}
              />
            </Map>
          </div>
        </YMaps>
      </div>
    </section>
  );
};

export default Details;
