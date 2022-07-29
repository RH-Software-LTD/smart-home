const styles = {
  nav: 'w-full px-32',
  navMain: 'py-8 lg:py-5 flex items-center justify-between max-w-screen-1.5lg  m-auto',
  navButtonContainer: 'flex w-2/5 gap-9 py-3 justify-flex-start',
  navButton: 'text-sm font-normal text-white inline-block focus-within:ring-0',
  buttonSection: 'hidden md:flex w-2/5 py-1 text-base text-white flex-wrap content-center justify-end items-center space-x-4 lg:flex',
}


const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navMain}>
        <div className={styles.navButtonContainer}>
          <a href="#" className={styles.navButton}>
            Home
          </a>
          <a href="#" className={styles.navButton}>
            About
          </a>
          <a href="#" className={styles.navButton}>
            Testimonial
          </a>
          <a href="#" className={styles.navButton}>
            Contact
          </a>
        </div>
        <a className="text-white text-xxl font-bold" href="#">smartHome</a>
        <div className={styles.buttonSection}>
          <a href="#" className="w-auto py-3 mr-5 whitespace-pre hover:underline">Login</a>
          <button className="w-auto px-6 py-3 rounded-md btn btn--swap shadow-lg bg-white">
            <span className="text-black">Sign Up</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
