import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Sitting with laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with experience in building optimized
                sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="cursor icon" />
            <div>
              <h3>Backend Developer</h3>
              <p>
                I am a backend developer with experience in building fast and
                optimized APIs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
