const styles = {
    footer: 'flex max-w-[1320px] py-10 bg-white w-full mx-auto',

}

const Footer = () => {
    return (
    <>
      <section className={styles.footer}>
        <div className="flex justify-start">
          <h2>smartHome</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </section>
      <section className="w-full">
        <p className="text-center text-sm text-[#FAFAFA] py-10 bg-[#000F37] pt-12 mt-16">Copyright © 2021 all rights reserved smartHome</p>
      </section>
    </>
    )
}

export default Footer