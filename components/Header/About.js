const styles = {
    grid: 'gap-8 items-center px-4 mx-auto max-w-screen-xl grid grid-cols-2'
}

const About = () => {
    return (
    <section class="">
        <h1 className="text-[85px] text-center font-bold">About Us</h1>
        <div className={styles.grid}>
            <img className="w-full" src="/phone1.png" alt="dashboard image"/> 
            <div className="mt-4 md:mt-0">
                <h1 className="mb-4 text-[46px] tracking-tight font-semibold text-[#000F37]">Smart Home’s Smart Services</h1>
                <p className="mb-6 font-light text-gray-600">Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                <a href="#" className="items-center text-white bg-[#000F37] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Learn More
                </a>
            </div>
        </div>
        <div className={styles.grid}>
            <div className="mt-4 md:mt-0">
                <h1 className="mb-4 text-[46px] tracking-tight font-semibold text-[#000F37]">What app can do to your Appliences?</h1>
                <p className="mb-6 font-light text-gray-600">Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                <a href="#" className="items-center text-[#000F37] border-2 border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Learn More
                </a>
            </div>
            <img className="w-full" src="/phone1.png" alt="dashboard image"/> 
        </div>
        <div className={styles.grid}>
            <img className="w-full" src="/phone1.png" alt="dashboard image"/> 
            <div className="mt-4 md:mt-0">
                <h1 className="mb-4 text-[46px] tracking-tight font-semibold text-[#000F37]">Control Electric Appliences</h1>
                <p className="mb-6 font-light text-gray-600">Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                <a href="#" className="items-center text-[#000F37] border-2 border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Learn More
                </a>
            </div>
        </div>
        
    </section>
    )
}

export default About;