import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Malina.</h1>
        <p className={styles.description}>
          I am a full-stack enthusiast with the knowledge of Frontend in React
          and Backend in Spring. Reach out to learn more about me.
        </p>
        <a href="mailto:malinashakya72@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero_me.png")}
        alt="Hero image of me."
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
