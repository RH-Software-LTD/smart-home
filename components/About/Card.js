const styles = {
  container: "flex w-full justify-between px-32",
  phone: "w-1/2",
  infoBox: "w-1/2 pl-24",
  header: "pt-32 text-aboutHeader font-semibold tracking-[2px] text-[#000F37]",
  info: "py-10 text-lg font-normal text-[#575757] w-[450px]",
};

const Card = () => {
  return (
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
        <button className="w-auto px-10 py-4 rounded-md btn btn--swap shadow-lg bg-[#000F37]">
            <span className="text-white">Learn More</span>
          </button>
      </div>
    </section>
  );
};

export default Card;
