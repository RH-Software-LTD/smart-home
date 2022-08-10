
const styles = {
    container: 'grid grid-cols-2 md:grid-cols-4 gap-4',
    logos: 'w-full flex shadow-lg items-center justify-center'

}

const Clients = () => {
    return (
        <section className={styles.container}>
            <div className={styles.logos}>
                <img src="/logo1.png" alt="logo1" />
            </div>
            <div className={styles.logos}>
                <img src="/logo2.png" alt="logo2" />
            </div>
            <div className={styles.logos}>
                <img src="/logo3.png" alt="logo3" />
            </div>
            <div className={styles.logos}>
                <img src="/logo4.png" alt="logo4" />
            </div>
            <div className={styles.logos}>
                <img src="/logo5.png" alt="logo5" />
            </div>
            <div className={styles.logos}>
                <img src="/logo6.png" alt="logo6" />
            </div>

            <div className={styles.logos}>
                <img src="/logo7.png" alt="logo7" />
            </div>
            <div className={styles.logos}>
                <img src="/logo8.png" alt="logo8" />
            </div>

        </section>
    )
}

export default Clients