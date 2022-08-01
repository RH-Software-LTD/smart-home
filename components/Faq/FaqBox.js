import { useState, useEffect } from "react";

const styles = {
    details: 'group rounded-xl bg-gray-50 p-6 shadow-2xl',
    detailsOpened: 'group rounded-xl bg-white p-6 shadow-2xl',
    questionArea: 'flex items-center',
    p: 'mt-4 w-[382px] pl-[60px] leading-relaxed text-gray-700',
    h5: 'px-10 text-lg font-medium text-gray-900',
}


const FaqBox = ({question}) => {
    const [isOpen, setIsOpen] = useState(false); 
    const [isMounted, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
      }, []);


    return (
            <details onToggle={() => isMounted && setIsOpen(!isOpen)} className={isOpen ? styles.detailsOpened : styles.details} open={isOpen}>
                <summary className={styles.questionArea}>
                    <span className="relative p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="red" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M0 12v1h23v-1h-23z" />
                        </svg>
                    </span>
                <h5 className={styles.h5}> {question} </h5>
                </summary>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!</p>
            </details>
    )
}

export default FaqBox;
