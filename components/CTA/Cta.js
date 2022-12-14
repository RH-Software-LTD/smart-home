const styles = {
    section: "items-center my-10 mb-32 flex",
    Wrapper: "rounded-xl bg-blue-700 p-8",
    flexWrap: "flex flex-col-reverse sm:flex-row items-center justify-between",
    infoBox: "w-full md:w-1/2",
    downloadImage: "flex w-full items-center justify-center md:w-1/2 p-6",
  };

const Cta = () => {
    return (
    <div id ="Contact" className={styles.section}>
        <div className={styles.Wrapper}>
            <div className={styles.flexWrap}>
                <div className="w-full sm:w-1/2 p-6">
                    <div className="font-heading text-white text-center sm:text-start">
                        <h2 className="text-xl font-semibold">Subscribe to get updated</h2>
                        <p className="my-5 text-md text-opacity-60">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque .</p>
                    </div>
                 </div>
                <div className="w-full sm:w-1/2 p-6">
                    <div className=" flex flex-wrap justify-center">
                        <div className="w-auto">
                            <button className="font-heading border-2 rounded-md border-white py-4 text-xs">
                                <p className="text-center -tracking-tighter px-8 text-white">Get Start</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}


export default Cta;