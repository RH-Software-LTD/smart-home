import FaqBox from './FaqBox';
import { useState, useEffect } from 'react';

const ExampleQuestions = {
    firstQuestion : 'Chamber reached do he nothing be?',
    secondQuestion : 'Stuff sight equal of my woody?',    
    thirdQuestion : 'At by pleasure of children be?',    
    fourthQuestion : 'Amounted repeated as believed in confined?',    
    fifthQuestion : 'In am do giving to afford parish settle easily garret?',
}

const styles = {
  section: "py-4 grow w-full flex items-center flex-col",
  container: "space-y-4 py-12",
  header: "text-5xl font-bold py-1 text-[#313131]",
}

const Faq = () => {
  return (
    <section className={styles.section}>
            <h1 className={styles.header}>FAQ's</h1>
            <div className={styles.container}>
              <FaqBox question={ExampleQuestions.firstQuestion}/>
              <FaqBox question={ExampleQuestions.secondQuestion}/>
              <FaqBox question={ExampleQuestions.thirdQuestion}/>
              <FaqBox question={ExampleQuestions.fourthQuestion}/>
              <FaqBox question={ExampleQuestions.fifthQuestion}/>
            </div>
    </section>
    );
};


export default Faq;
