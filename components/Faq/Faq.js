import { useEffect, useState } from "react";

const styles = {
  section: "py-4 grow lg:pt-  2 lg:pb-16 w-full flex items-center flex-col",
  header: "text-header font-bold py-1 text-[#313131]",
  faqQuestion: "w-32 h-32 bg-red-500",
  faqQuestionBlue: "w-32 h-32 bg-blue-500",

};

const OurClients = () => {
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    console.log("buton rengi değişti");
  });
  
  const toggleVisible = () => {
    console.log(visible);
    setVisible(!visible);
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.header}>FAQ's</h1>
      <button onClick={toggleVisible} className="w-auto px-10 py-4 rounded-md border-2 btn btn--swap text-black shadow-lg hover:text-white hover:bg-[#000F37]">
        <span>Learn More</span>
      </button>

      <div className={ visible ? styles.faqQuestion : styles.faqQuestionBlue }>Stuff sight equal of my woody?</div>  
      
    </section>
  );
};

export default OurClients;
