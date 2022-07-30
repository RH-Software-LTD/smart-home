import FaqBoxes from './FaqBoxes';
import { useState, useEffect } from 'react';

const styles = {
  section: "py-4 grow lg:pt-  2 lg:pb-16 w-full flex items-center flex-col",
  header: "text-header font-bold py-1 text-[#313131]",
  faqQuestion: "w-32 h-32 bg-red-500",
  faqQuestionBlue: "w-32 h-32 bg-blue-500",

}

const Faq = () => {
  return (
    <section className={styles.section}>
            <h1 className={styles.header}>FAQ's</h1>
            <FaqBoxes/>
    </section>
    );
};


export default Faq;
