import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'


const styles = {
  section: 'py-4 grow lg:pt-12 lg:pb-16',
  heroBody: 'px-4 mx-auto max-w-8xl lg:px-4 lg:text-center',
  headText: 'text-center mx-auto max-w-[920px] text-white text-[85px] font-extrabold tracking-tight lg:font-extrabold lg:text-6xl lg:leading-none lg:text-center xl:px-36 lg:mb-7',
  p:'max-w-[1200px] text-center mx-auto mb-10 text-[18px] font-normal text-[#FAFAFA] lg:text-center lg:text-[18px] xl:px-60',
  phones: 'relative mx-auto mt-12 w-full max-w-[1320px] lg:mt-20',
  socialBar: 'absolute left-0 top-1/4 z-50 px-5 py-12 top-[532px] bg-transparent flex flex-col space-y-6 text-white',
}


const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heroBody}>
        <a href="">
        </a>
        <h1 className={styles.headText}>
          Smart Home Application
        </h1>
        <p className={styles.p}>
          Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.
        </p>
        <img src="phone.png" className={styles.phones}></img>
      </div>
      <div className={styles.socialBar}>
        <a href='' title='Follow on Facebook'>
          <FaFacebookF/>
        </a>
        <a href='' title='Follow on Instagram'>
          <FaInstagram/>
        </a>
        <a href='' title='Follow on Twitter'>
          <FaTwitter/>
        </a>
        <a href='' title='Follow on Twitter'>
          <FaLinkedinIn/>
        </a>
      </div>
    </section>
    );
};

export default Hero;
