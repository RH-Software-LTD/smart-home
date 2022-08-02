import Card from "./Card";

const styles = {
    section: 'py-4 flex items-center flex-col',
    header: 'text-5xl font-bold py-12 text-[#313131]',
}

const About = () => {
  return (
    <section className={styles.section}>
            <h1 className={styles.header}>About Us</h1>
            <Card />
    </section>
    );
};

export default About;
