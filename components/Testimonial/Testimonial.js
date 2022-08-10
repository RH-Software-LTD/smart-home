import Testimonials from "./Testimonials";

const styles = {
    section: 'w-4/5 py-4 grow w-full flex items-center flex-col',
    header: 'text-4xl font-bold py-12 text-black',
    p: "py-10 text-center text-xl font-normal text-[#575757]",

}

const Testimonial = () => {
  return (
    <section id="Testimonial" className={styles.section}>
            <h1 className={styles.header}>Testimonials</h1>
            <p className={styles.p}>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
            <Testimonials />
    </section>
    );
};

export default Testimonial
