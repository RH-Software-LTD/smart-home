const styles = {
  section:'w-4/5',
  flexWrap: 'flex flex-col-reverse md:flex-row items-center',
  infoBox : 'w-full md:w-1/2'
}

const DownloadCTA = () => {
  return (
    <section className={styles.section}>
      <div className={styles.flexWrap}>
        <div className={styles.infoBox}>
          <h2 class="mb-6 text-5xl font-bold text-[#313131]">Download App</h2>
          <p class="mb-8 text-gray-600 text-[19px]">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
          <div class="flex flex-wrap justify-start">
            <div class="w-auto py-2.5 pr-2.5">
              <a href="#">
                <img src="/apple.png" alt="" data-config-id="auto-img-3-3" />
              </a>
            </div>
            <div class="items-left py-2.5 pr-2.5">
              <a href="#">
                <img src="/google.png" />
              </a>
            </div>
          </div>
        </div>
        <div class="flex w-full items-center justify-center md:w-1/2 p-6">
          <img src="/phone-download.png" className="w-64" />
        </div>
      </div>
    </section>
  )
}

export default DownloadCTA