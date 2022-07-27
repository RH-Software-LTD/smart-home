const styles = {
  nav: 'absolute top-0 left-0 z-50 w-full px-[135px]',
  navMain: 'py-8 lg:py-5 px-5 flex justify-between max-w-screen-1.5lg  m-auto',
  ul: 'w-2/5 hidden md:block py-3 justify-between',
  li: 'parent-item px-5 py-1 text-[17px] text-white inline-block focus-within:ring-0',
  buttonSection: 'hidden md:flex w-2/5 py-1 text-base text-white flex-wrap content-center justify-end items-center space-x-4 lg:flex',
}


const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navMain}>
        <ul className={styles.ul}>
          <li className={styles.li}>
              <a href="#">
                Home
              </a>
          </li>
          <li className={styles.li}>
              <a href="#">
                About
              </a>
          </li>
          <li className={styles.li}>
              <a href="#">
                Testimonial
              </a>
          </li>
          <li className={styles.li}>
              <a href="#">
                Contact
              </a>
          </li>
        </ul>
        <a className="self-center text-white text-[32px] font-bold font-sans" href="#">smartHome</a>
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
