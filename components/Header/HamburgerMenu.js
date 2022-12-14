import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";

var burgerStyles = {
  bmBurgerButton: {
    position: "relative",
    width: "26px",
    height: "20px",
  },
  bmBurgerBars: {
    background: "white",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#7780A1",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0",
  },
  bmMenu: {
    background: "white",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#7780A1",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  bmItem: {
    display: "flex",
    justifyContent: "center",
    padding: "0.25rem 0",
  },
};

const styles = {
  buttonSection:
    "hidden lg:flex w-full py-1 text-base text-white flex-wrap content-center justify-end items-center space-x-4 mt-4",
  button: "w-auto px-6 py-3 rounded-md btn shadow-xl bg-blue-600",
};

const HamburgerMenu = () => {
  return (
    <div className="flex lg:hidden">
      <Menu styles={burgerStyles} width={280} right>
        <Link activeClass="active" smooth spy to="Home">
          Home
        </Link>
        <Link activeClass="active" smooth spy to="About">
          About
        </Link>
        <Link activeClass="active" smooth spy to="Testimonial">
          Testimonial
        </Link>
        <Link activeClass="active" smooth spy to="Contact">
          Contact
        </Link>
        <div className={styles.buttonSection}>
          <button className={styles.button}>
            <span className="text-white font-medium ">Login</span>
          </button>
          <button className={styles.button}>
            <span className="text-white font-medium">Sign Up</span>
          </button>
        </div>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
