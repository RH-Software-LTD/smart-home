
const styles = {
    columns: 'mx-auto grid grid-cols-4 gap-4 mb-6',
    logos: 'border-2 object-fit p-6 shadow-lg rounded-md'

}

const Clients = () => {
  return (
    <section className="max-w-[1320px] w-full px-32">
        <div className={styles.columns}>
            <div className={styles.logos}>
                <img className="mx-auto h-16" src="/logo1.png" alt="logo1" />
            </div>
            <div className={styles.logos}>
                <img className="mx-auto h-16" src="/logo2.png" alt="logo2" />
            </div>
            <div className={styles.logos}>
                <img className="mx-auto h-16" src="/logo3.png" alt="logo3" />
            </div>
            <div className={styles.logos}>
                <img className="mx-auto h-16" src="/logo4.png" alt="logo4" />
            </div>
        </div>
        <div className={styles.columns}>
            <div className={styles.logos}>
                <img className="mx-auto h-12" src="/logo5.png" alt="logo5" />
            </div>
            <div className={styles.logos}>
                <img className="mx-auto h-12" src="/logo6.png" alt="logo6" />
            </div>
            <div className={styles.logos}>
                <img className="mx-auto h-12" src="/logo7.png" alt="logo7" />
            </div>
            <div className={styles.logos}>
                <img className="mx-auto h-12" src="/logo8.png" alt="logo8" />
            </div>
        </div>
    </section>
    )
}

export default Clients