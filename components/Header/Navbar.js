import { Link } from "react-scroll";
import HamburgerMenu from "./HamburgerMenu";


const styles = {
  navMain: 'w-full px-8 lg:px-20 py-8 lg:py-5 flex items-center justify-between',
  navButtonContainer: 'hidden lg:flex w-2/5 gap-9 py-3 justify-flex-start',
  navButton: 'hover:cursor-pointer text-sm font-light text-white inline-block focus-within:ring-0 menu-item ',
  buttonSection: 'hidden lg:flex w-2/5 py-1 text-base text-white flex-wrap content-center justify-end items-center space-x-4 ',
}


const Navbar = () => {
  return (
    <div id="Home" className={styles.navMain}>
      <div className={styles.navButtonContainer}>


          <Link className={styles.navButton} activeClass="active" smooth spy to="Home">
                    Home
          </Link>
          <Link className={styles.navButton} activeClass="active" smooth spy to="About">
            About
          </Link>
          <Link className={styles.navButton} activeClass="active" smooth spy to="Testimonial">
          Testimonial
          </Link>
          <Link className={styles.navButton} activeClass="active" smooth spy to="Contact">
          Contact
          </Link>

      </div>
      <a className="text-white text-2xl font-semibold whitespace-nowrap" href="#">Smart Solutions</a>

      <HamburgerMenu />

      <div className={styles.buttonSection}>
        <a href="#" className="w-auto py-3 mr-5 whitespace-pre hover:underline">Login</a>
        <button className="w-auto px-6 py-3 rounded-md btn btn--swap shadow-lg bg-white z-10">
          <span className="text-black font-medium">Sign Up</span>
        </button>
      </div>
    </div>
  )
}

export default Navbar
