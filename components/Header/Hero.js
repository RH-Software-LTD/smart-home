import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'


const styles = {
  section: 'text-center flex flex-col justify-center items-center py-4 grow',
  heroBody: 'px-4 flex flex-col mt-8 justify-center items-center',
  header: 'mb-8',
  headerText: 'text-white text-7xl font-extrabold whitespace-nowrap',
  p: 'w-2/3 text-[18px] font-normal text-[#FAFAFA]',
  phones: 'mt-4 w-full lg:mt-2-10',
  socialBar: 'absolute left-0 top-[532px] px-5 flex flex-col space-y-6 text-white',
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
        <img src="phone.png" className={styles.phones}></img>
      </div>
      <div className={styles.socialBar}>
        <a href='' title='Follow on Facebook'>
          <FaFacebookF />
        </a>
        <a href='' title='Follow on Instagram'>
          <FaInstagram />
        </a>
        <a href='' title='Follow on Twitter'>
          <FaTwitter />
        </a>
        <a href='' title='Follow on Twitter'>
          <FaLinkedinIn />
        </a>
      </div>
      <div className="flex justify-center items-center space-x-10">
        <a href=""><img src="/apple.png" alt='appple'></img></a>
        <a href=""><img src="/google.png" alt="google"></img></a>
      </div>
    </section>
  );
};

export default Hero;
