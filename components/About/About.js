import Card from "./Card";
import { IKImage } from "imagekitio-react";

const styles = {
  section: "relative py-4 flex flex items-center flex-col justify-center ",
  container: "w-4/5 flex items-center flex-col justify-center",
  header: "text-4xl text-center font-bold py-12 text-black",
  vector: "absolute w-1/2 right-0 top-[-200px]",
  vectorImg: "w-full",
};

const About = () => {
  return (
    <section id="About" className={styles.section}>
      <div className={styles.vector}>
        <IKImage
          path="smarthome/VectorLine.png"
          loading="lazy"
          lqip={{ active: true }}
        />
      </div>
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <Card />
      </div>
    </section>
  );
};

export default About;
