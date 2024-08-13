import styles from "./ProjectsStyles.module.css";
import rickandmorty from "../../assets/rickandmorty.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={rickandmorty}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Rick and Morty"
          p="Website"
          rick={"rick"}
        />
        <ProjectCard
          src={freshBurger}
          link="https://elman2055.github.io/burgers/"
          h3="Create Burgers"
          p="Website"
        />
        <ProjectCard
          src={rickandmorty}
          link="https://github.com/Elman2055/Rick_and_Morty"
          h3="Rick and Morty"
          p="GitHub repository"
          rick={"rick"}
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Elman2055/burgers"
          h3="Create Burgers"
          p="GitHub repository"
        />
      </div>
    </section>
  );
}

export default Projects;
