import { IKImage } from "imagekitio-react";

const styles = {
  container: "grid grid-cols-2 md:grid-cols-4 gap-4",
  logos: "w-full flex shadow-lg items-center justify-center",
};

const Clients = () => {
  return (
    <section className={styles.container}>
      {Array.from(Array(8), (e, i) => {
        return (
          <div className={styles.logos}>
            <IKImage
              path={`smarthome/logo${i + 1}.png`}
              loading="lazy"
              lqip={{ active: true }}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Clients;
