const styles = {
    section: 'max-w-[1328px] mx-auto',
    container: 'container mx-auto px-4',
    flexWrap: 'flex flex-wrap items-center -m-6',
    cocuk1: 'relative w-full md:w-1/2 p-6',
    cocuk2: 'flex w-full md:w-1/2 p-6',



}

const DownloadCTA = () => {
    return (
    <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.flexWrap}>
            <div class="relative w-1/2 p-6">
              <div class="relative px-10">
                <h2 class="mb-6 text-header font-bold text-[#313131]" >Download App</h2>
                <p class="mb-8 text-gray-600 text-[19px]">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
                <div class="flex flex-wrap justify-start">
                  <div class="w-auto p-2.5">
                    <a href="#">
                      <img src="/apple.png" alt="" data-config-id="auto-img-3-3"/>
                    </a>
                  </div>
                  <div class="items-left w-auto p-2.5">
                    <a href="#">
                      <img src="/google.png"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex w-full md:w-1/2 p-6">
              <img class="mx-auto" src="/phone-rectangle.png"/>
            </div>
          </div>
        </div>
      </section>
    )
}

export default DownloadCTA