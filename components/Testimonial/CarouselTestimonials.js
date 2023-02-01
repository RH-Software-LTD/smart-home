import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Ratings from "./Ratings";
import { IKImage } from "imagekitio-react";

const styles = {
  container: "flex w-full items-center justify-center",
  blockquotes:
    "flex flex-col justify-between border-1 rounded-lg bg-gray-100 p-6",
  header: "items-center flex flex-col md flex-row",
  profile: "mt-6 w-3/4 md:w-1/3",
  comment: "mt-2 text-gray-700 text-xs md:text-base",
};

const CarouselTestimonials = () => {
  return (
    <div className={styles.container}>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <blockquote className={styles.blockquotes}>
          <header className={styles.header}>
            <Ratings />
            <p className="px-3 mt-2 font-medium"> Reliable</p>
          </header>
          <p className={styles.comment}>
            I’ve had my Fitbit for almost 3 years and it still tracks reliably.
            It now only keeps its charge for about 4 days but everything else is
            working fine. When I first received it the charge was much longer.
            No complaints!
          </p>
          <footer className={styles.profile}>
            <IKImage
              path="smarthome/profile1.png"
              loading="lazy"
              lqip={{ active: true }}
            />
          </footer>
        </blockquote>

        <blockquote className={styles.blockquotes}>
          <header className={styles.header}>
            <Ratings />
            <p className="px-3 mt-2 font-medium">Challenges me everyday</p>
          </header>
          <p className={styles.comment}>
            I love my Fitbit Versa! I have used Fitbit products since 2013 And
            have loved every device I have purchased! The apps keep me
            accountable to my exercise regime. The watch itself is so easy to
            set up and use.
          </p>
          <footer className={styles.profile}>
          <IKImage
              path="smarthome/profile2.png"
              loading="lazy"
              lqip={{ active: true }}
            />          </footer>
        </blockquote>

        <blockquote className={styles.blockquotes}>
          <header className={styles.header}>
            <Ratings />
            <p className="px-3 mt-2 font-medium">Love the Fucking app!</p>
          </header>
          <p className={styles.comment}>
            Have been a long time user. Really appreciate all the functionality
            and updates over the years. Keep them coming! Have been using almost
            all of the features/functions daily. Would love to see a module to
            track blood pressure added.
          </p>
          <footer className={styles.profile}>
          <IKImage
              path="smarthome/profile3.png"
              loading="lazy"
              lqip={{ active: true }}
            />          </footer>
        </blockquote>

        <blockquote className={styles.blockquotes}>
          <header className={styles.header}>
            <Ratings />
            <p className="px-3 mt-2 font-medium">Love the Fitbit</p>
          </header>
          <p className={styles.comment}>
            Perfect for me, tracks all things of interest to me and so
            accurate.My wife even bought me an Apple Watch, I returned the watch
            as it just didn’t fit my fitness needs.
          </p>
          <footer className={styles.profile}>
          <IKImage
              path="smarthome/profile4.png"
              loading="lazy"
              lqip={{ active: true }}
            />          </footer>
        </blockquote>
      </Carousel>
    </div>
  );
};

export default CarouselTestimonials;
