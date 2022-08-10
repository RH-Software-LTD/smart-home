import Clients from './Clients';

const styles = {
  section: 'w-4/5 grow pb-12 flex items-center flex-col',
  header: 'text-4xl text-center font-bold py-12 text-black',
  p: "pb-20 text-center text-xl font-normal text-[#575757]",

}

const OurClients = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.header}>Our Clients</h1>
      <p className={styles.p}>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
      <Clients />
    </section>
  );
};

export default OurClients