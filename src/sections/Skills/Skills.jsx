import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Next" />
        <SkillList src={checkMarkIcon} skill="Vue" />
      </div>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="RTK Query" />
        <SkillList src={checkMarkIcon} skill="SSR,SSG,CSR" />
      </div>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="SaaS,ScsS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
      </div>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MUI" />
        <SkillList src={checkMarkIcon} skill="Ant Design" />
        <SkillList src={checkMarkIcon} skill="Next-intl" />
        <SkillList src={checkMarkIcon} skill="I18n" />
        <SkillList src={checkMarkIcon} skill="React-slick" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="GitHub" />
        <SkillList src={checkMarkIcon} skill="GitLub" />
        <SkillList src={checkMarkIcon} skill="FSD" />
        <SkillList src={checkMarkIcon} skill="Vite" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="RestApi" />
        <SkillList src={checkMarkIcon} skill="Fetch" />
        <SkillList src={checkMarkIcon} skill="Axios" />
        <SkillList src={checkMarkIcon} skill="Jest" />
      </div>
    </section>
  );
}

export default Skills;
