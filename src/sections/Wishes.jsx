import classes from "./Wishes.module.scss";

const Wishes = () => {
  return (
    <section
      id="wishes"
      className={classes.section}
    >
      <h2 className={`section-title`}>Пожелания</h2>
      <div className={classes.container}>
        <div data-aos="slide-right" data-aos-delay="100">
          <span>Мы любим сладкое, не кричите «Горько!»</span>

          <p>
            Ваше присутствие — лучшая поддержка в этот день.
            <br /> Поцелуев будет достаточно и без напоминаний :)
          </p>
        </div>
        <div data-aos="slide-left" data-aos-delay="500">
          <span>Цветы завянут, вино останется без внимания…</span>
          <p>
            А вот ваш вклад в бюджет молодой семьи точно не пропадёт даром ;){" "}
            <br /> Если хочется нас порадовать — подарок в конверте будет самым
            практичным и желанным.
          </p>
        </div>
        <div data-aos="slide-right" data-aos-delay="900">
          <span>На нашем мероприятии будет фотограф!</span>
          <p>
            Но если в вас проснётся творческая муза - не забудьте поделиться
            материалами в чате, который мы создадим для гостей перед торжеством
            :)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Wishes;
