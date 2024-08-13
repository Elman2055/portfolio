import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h1 style={{ marginBottom: "20px" }}>Experience</h1>
      <div className={styles.experienceBlock}>
        <h3 className={styles.dateInfo}>Февраль 2024 - Июль 2024</h3>

        <div className={styles.infoContainer}>
          <div className={styles.companyContainer}>
            <h2 className={styles.companyName}>Daribar</h2>
            <p className={styles.companyInfo}>
              <span className={styles.addText}>Daribar - </span> это
              фармацевтическая компания, предоставляющая услуги по онлайн заказу
              аптечных товаров и их аналогов. Имеет возможность доставки, а
              также самовывоза с ближайших аптек. Рецепты лекарств и напоминание
              о их применении. <br /> Ссылка на сайт -{" "}
              <a
                className={styles.linkk}
                href="https://daribar.kz/"
                target="_blank"
              >
                Daribar.kz
              </a>
            </p>
          </div>

          <div className={styles.posContainer}>
            <div>
              <h2 className={styles.posName}>Frontend Developer</h2>
              <p className={styles.jobDescription}>
                <span className={styles.addText}>
                  Моя работа заключалась в{" "}
                </span>{" "}
                рефакторинге кода, переноса на архитектуру FSD, багфиксинг.
                Taкже полноценная реализация фичей и продуктов в связке с
                бэкендом. Работа как с dev, так и с prod/master.
                <br />
                <span className={styles.addText}>Из достижений - </span>{" "}
                оптимизировал проект,облегчил возможность изменения или
                внедрения чего-либо разработчикам, путём разбиения кода на
                архитектуру. Добавил множество новых продуктов.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.technologiesContainer}>
          <h3 className={styles.technologies}>Исопользуемые технологии</h3>
          <ul className={styles.technologyList}>
            <li>Next</li>
            <li>React</li>
            <li>Redux</li>
            <li>FSD</li>
            <li>GitHub</li>
            <li>SSR</li>
            <li>SSG</li>
            <li>TypeScript</li>
            <li>module-CSS</li>
            <li>module-SCSS</li>
            <li>RestApi</li>
            <li>RTK Query</li>
            <li>API Connector</li>
            <li>Material UI</li>
            <li>React-slick</li>
            <li>Editor.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
