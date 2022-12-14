const styles = {
  containerLeft:
    "flex flex-col md:space-x-20 w-full justify-between md:flex-row",
  containerRight:
    "flex flex-col md:space-x-20 w-full justify-between md:flex-row flex-col-reverse",
  phone: "flex justify-center items-center md:w-1/2",
  infoBox: "md:w-1/2 flex flex-col items-center md:items-start justify-center",
  header: "pt-8 md:pt-32 text-5xl md:text-6xl xl:text-7xl font-semibold tracking-[2px] text-[#000F37]",
  info: "py-10 text-xl md:text-2xl xl:text-3xl font-normal text-[#C2C2C2]",
};

const Card = () => {
  return (
    <>

      <section className={styles.containerLeft}>
        <div className={styles.phone}>
          <img src="firstPhone.png"></img>
        </div>
        <div className={styles.infoBox}>
          <h2 className={styles.header}>Smart Home’s Smart Services</h2>
          <p className={styles.info}>
            Ye am depending propriety sweetness distrusts belonging collected.
            Smiling mention he in thought equally musical. Wisdom new and valley
            answer. Contented it so is discourse recommend. Man its upon him
            call mile. An pasture he himself believe ferrars besides cottage.
          </p>
          <button className="w-auto px-10 py-4 rounded-md border-2 btn btn--swap text-black shadow-lg hover:text-white hover:bg-[#000F37]">
            <span>Learn More</span>
          </button>
        </div>
      </section>
      <section className={styles.containerRight}>
        <div className={styles.infoBox}>
          <h2 className={styles.header}>What app can do to your Appliences?</h2>
          <p className={styles.info}>
            Ye am depending propriety sweetness distrusts belonging collected.
            Smiling mention he in thought equally musical. Wisdom new and valley
            answer. Contented it so is discourse recommend. Man its upon him
            call mile. An pasture he himself believe ferrars besides cottage.
          </p>
          <button className="w-auto px-10 py-4 rounded-md border-2 btn btn--swap text-black shadow-lg hover:text-white hover:bg-[#000F37]">
            <span>Learn More</span>
          </button>
        </div>
        <div className={styles.phone}>
          <img src="secondPhone.png"></img>
        </div>
      </section>
      <section className={styles.containerLeft}>
        <div className={styles.phone}>
          <img src="thirdPhone.png"></img>
        </div>
        <div className={styles.infoBox}>
          <h2 className={styles.header}>Control Electric Appliences</h2>
          <p className={styles.info}>
            Ye am depending propriety sweetness distrusts belonging collected.
            Smiling mention he in thought equally musical. Wisdom new and valley
            answer. Contented it so is discourse recommend. Man its upon him
            call mile. An pasture he himself believe ferrars besides cottage.
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
