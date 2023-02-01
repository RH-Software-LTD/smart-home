import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import { IKImage } from "imagekitio-react";

const styles = {
  cornerEllipseWrapper: "absolute right-[-150px] top-[-150px] z-[-1]",
  midEllipseWrapper: "absolute left-[-170px] top-[1100px]",
  downloadWrapper:
    "absolute w-[200px] h-[90px] right-0 top-[850px] hidden md:block",
  socialBar:
    "absolute left-0 top-[652px] px-5 flex flex-col space-y-6 text-white",
};

const Decor = () => {
  return (
    <>
      <div className={styles.cornerEllipseWrapper}>
        <div className="cornerEllipse" />
      </div>
      <div className={styles.downloadWrapper}>
        <a href="">
          <IKImage
            path="smarthome/download.png"
            loading="lazy"
            lqip={{ active: true }}
          />
        </a>
      </div>
      <div className={styles.midEllipseWrapper}>
        <div className="middleEllipse" />
      </div>
      <div className={styles.socialBar}>
        <a href="" title="Follow on Facebook">
          <FaFacebookF />
        </a>
        <a href="" title="Follow on Instagram">
          <FaInstagram />
        </a>
        <a href="" title="Follow on Twitter">
          <FaTwitter />
        </a>
        <a href="" title="Follow on Twitter">
          <FaLinkedinIn />
        </a>
      </div>
    </>
  );
};

export default Decor;
