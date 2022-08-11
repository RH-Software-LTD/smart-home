const styles = {
  section: 'relative text-center flex flex-col justify-center items-center py-4 grow mb-8',
  heroBody: 'w-4/5 px-4 flex flex-col mt-8 justify-center items-center',
  header: 'mb-8',
  headerText: 'text-white text-7xl font-extrabold whitespace-nowrap',
  p: 'w-2/3 text-[18px] font-normal text-[#FAFAFA] mb-8',
  phones: 'mt-4 w-4/5 mb-12',
}


const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heroBody}>


        <div className={styles.header}>
          <h1 className={styles.headerText}>
            Smart Home
          </h1>
          <h1 className={styles.headerText}>
            Application
          </h1>

        </div>
        <p className={styles.p}>
          Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
        </p>
        <img src="phones.png" className={styles.phones}></img>
      </div>
      <div className="flex justify-center items-center space-x-10 z-10">
        <a href=""><img src="/apple.png" alt='apple'></img></a>
        <a href=""><img src="/google.png" alt="google"></img></a>
      </div>
    </section>
  );
};

export default Hero;
