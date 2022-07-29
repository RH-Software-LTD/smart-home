import Card from "./Card";

const styles = {
    section: 'py-4 grow lg:pt-  2 lg:pb-16 w-full flex items-center flex-col',
    header: 'text-header font-bold py-12 text-[#313131]',
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
