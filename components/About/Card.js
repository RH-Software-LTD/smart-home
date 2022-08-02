const styles = {
  container: "flex flex-col py-10 md:space-x-12 w-full justify-between md:flex-row",
  phone: "flex justify-center items-center md:w-1/2",
  infoBox: "md:w-1/2",
  header: "pt-32 text-aboutHeader font-semibold tracking-[2px] text-[#000F37]",
  info: "py-10 text-xl font-normal text-[#575757]",
};

const Card = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.phone}>
          <img src="phone-rectangle.png"></img>
        </div>
        <div className={styles.infoBox}>
          <h2 className={styles.header}>Smart Home’s Smart Services</h2>
          <p className={styles.info}>
            Ye am depending propriety sweetness distrusts belonging collected.
            Smiling mention he in thought equally musical. Wisdom new and valley
            answer. Contented it so is discourse recommend. Man its upon him call
            mile. An pasture he himself believe ferrars besides cottage.
          </p>
          <button className="w-auto px-10 py-4 rounded-md border-2 btn btn--swap text-black shadow-lg hover:text-white hover:bg-[#000F37]">
              <span>Learn More</span>
            </button>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.infoBox}>
          <h2 className={styles.header}>What app can do to your Appliences?</h2>
          <p className={styles.info}>
            Ye am depending propriety sweetness distrusts belonging collected.
            Smiling mention he in thought equally musical. Wisdom new and valley
            answer. Contented it so is discourse recommend. Man its upon him call
            mile. An pasture he himself believe ferrars besides cottage.
          </p>
          <button className="w-auto px-10 py-4 rounded-md border-2 btn btn--swap text-black shadow-lg hover:text-white hover:bg-[#000F37]">
              <span>Learn More</span>
          </button>
        </div>
        <div className={styles.phone}>
          <img src="phone-rectangle.png"></img>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.phone}>
          <img src="phone-rectangle.png"></img>
        </div>
        <div className={styles.infoBox}>
          <h2 className={styles.header}>Control Electric Appliences</h2>
          <p className={styles.info}>
            Ye am depending propriety sweetness distrusts belonging collected.
            Smiling mention he in thought equally musical. Wisdom new and valley
            answer. Contented it so is discourse recommend. Man its upon him call
            mile. An pasture he himself believe ferrars besides cottage.
          </p>
          <button className="w-auto px-10 py-4 rounded-md border-2 btn btn--swap text-black shadow-lg hover:text-white hover:bg-[#000F37]">
              <span>Learn More</span>
            </button>
          </div>
      </section>
    </>
  );
};

export default Card;
