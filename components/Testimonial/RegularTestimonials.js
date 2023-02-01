import Ratings from "./Ratings";
import { IKImage } from "imagekitio-react";

const styles = {
  blockquotes:
    "flex flex-col justify-between border-1 rounded-lg bg-gray-100 p-6 hover:bg-white",
  grids: "grid mt-8 grid-cols-2 gap-x-12 gap-y-12",
  profile: "mt-6 w-1/2",
};

const RegularTestimonials = () => {
  return (
    <div className={styles.grids}>
      <blockquote className={styles.blockquotes}>
        <div>
          <header className="items-center flex">
            <Ratings />
            <p className="px-3 mt-2 font-medium"> Reliable</p>
          </header>
          <p className="mt-2 text-gray-700">
            I’ve had my Fitbit for almost 3 years and it still tracks reliably.
            It now only keeps its charge for about 4 days but everything else is
            working fine. When I first received it the charge was much longer.
            No complaints!
          </p>
        </div>
        <footer className={styles.profile}>
          <IKImage
            path="smarthome/profile1.png"
            loading="lazy"
            lqip={{ active: true }}
          />
        </footer>
      </blockquote>
      <blockquote className={styles.blockquotes}>
        <div>
          <header className="items-center flex">
            <Ratings />
            <p className="px-3 mt-2 font-medium">Challenges me everyday</p>
          </header>
          <p className="mt-2 text-gray-700">
            I love my Fitbit Versa! I have used Fitbit products since 2013 And
            have loved every device I have purchased! The apps keep me
            accountable to my exercise regime. The watch itself is so easy to
            set up and use. I use Apple products everyday.
          </p>
        </div>
        <footer className={styles.profile}>
        <IKImage
              path="smarthome/profile2.png"
              loading="lazy"
              lqip={{ active: true }}
            />        </footer>
      </blockquote>
      <blockquote className={styles.blockquotes}>
        <div>
          <header className="items-center flex">
            <Ratings />
            <p className="px-3 mt-2 font-medium">Love the Fucking app!</p>
          </header>
          <p className="mt-2 text-gray-700">
            Have been a long time user. Really appreciate all the functionality
            and updates over the years. Keep them coming! Have been using almost
            all of the features/functions daily. Would love to see a module to
            track blood pressure added.
          </p>
        </div>
        <footer className={styles.profile}>
        <IKImage
              path="smarthome/profile3.png"
              loading="lazy"
              lqip={{ active: true }}
            />        </footer>
      </blockquote>
      <blockquote className={styles.blockquotes}>
        <div>
          <header className="items-center flex">
            <Ratings />
            <p className="px-3 mt-2 font-medium">Love the Fitbit</p>
          </header>
          <p className="mt-2 text-gray-700">
            Perfect for me, tracks all things of interest to me and so
            accurate.My wife even bought me an Apple Watch, I returned the watch
            as it just didn’t fit my fitness needs.
          </p>
        </div>
        <footer className={styles.profile}>
        <IKImage
              path="smarthome/profile4.png"
              loading="lazy"
              lqip={{ active: true }}
            />        </footer>
      </blockquote>
    </div>
  );
};

export default RegularTestimonials;
