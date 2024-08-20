import styles from "./HeroStyles.module.css";
import profile from "../../assets/profile.png";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import telegramLight from "../../assets/telegram-svgrepo-com.svg";
import telegramDark from "../../assets/telegram-svgrepo-com-dark.svg";
import ThemeSwitch from "../lib/Theme";
import { FormControlLabel } from "@mui/material";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const telegramIcon = theme === "light" ? telegramLight : telegramDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={profile} className={styles.hero} alt="Profile picture" />
        <FormControlLabel
          className={styles.colorMode}
          control={
            <ThemeSwitch checked={theme === "dark"} onChange={toggleTheme} />
          }
        />
      </div>
      <div className={styles.info}>
        <h1>
          Эльман
          <br />
          Байрамов
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://t.me/strange_adam" target="_blank">
            <img src={telegramIcon} alt="Github icon" />
          </a>
          <a href="https://github.com/Elman2055" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/el-man-bairamov-153b71311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Привет! Я Эльман, Frontend разработчик. Разрабатываю веб-приложения на
          Next, React, Redux, JavaScript, TypeScript. Ниже показаны мои проекты
          и навыки, буду рад вашему просмотру. Готов к новым вызовам!
        </p>
      </div>
    </section>
  );
}

export default Hero;
