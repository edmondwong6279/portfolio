import styles from "./AboutComponent.module.scss";
import React from "react";
import ImageComponent from "components/ImageComponent";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AboutComponent: React.FC = () => (
  <section className={styles.container}>
    <div className={styles.aboutSection}>
      <h3 className={styles.bigHeader}>Education Achievements</h3>
      <div className={styles.item}>
        <h4 className={styles.header}>
          B.Sci Mathematics
          <br /> <span className={styles.italics}>Class I with honours</span>
        </h4>
        <ul className={styles.description}>
          <li>
            Awarded the{" "}
            <span className={styles.bold}>George Watson Scholarship</span> for
            outstanding A-Level results.
          </li>
          <li>
            Awarded{" "}
            <span className={styles.bold}>"Best Presented Project"</span> in
            Mathematical Modelling and Problem Solving Module.
          </li>
        </ul>
        <div className={styles.imageContainer}>
          <ImageComponent
            alt={"My friends and I at our graduation."}
            src={"/images/maths_grad.jpg"}
          />
        </div>
      </div>

      <div className={styles.item}>
        <h4 className={styles.header}>
          M.Sc. Computer Science
          <br /> <span className={styles.italics}>Distinction</span>
        </h4>
        <ul className={styles.description}>
          <li>
            Awarded the{" "}
            <span className={styles.bold}>
              Distinguished Alumni Scholarship
            </span>{" "}
            for excellent undergraduate degree.
          </li>
          <li>
            Awarded{" "}
            <span className={styles.bold}>
              "Best Student in M.Sc. Computer Science"
            </span>{" "}
            for the highest grade in the whole cohort.
          </li>
        </ul>
        <div className={styles.imageContainer}>
          <ImageComponent
            src={"/images/me.jpg"}
            alt={"Image of me at my M.Sc Computer Science graduation."}
          />
        </div>
      </div>
    </div>
    <div className={styles.aboutSection}>
      <h3 className={styles.bigHeader}>Extra Curricular Achievements</h3>
      <h4>Carnival RAG</h4>
      <div className={classNames(styles.item, styles.flipped)}>
        <h4 className={styles.header}>Charity Skydive</h4>
        <ul className={styles.description}>
          <li>
            Raised <span className={styles.bold}>£409.85</span> for The
            Children's Society and participated in a tandem skydive.
          </li>
          <li>
            Awarded{" "}
            <span className={styles.bold}>“Skydiver of the Year 2014/15”</span>{" "}
            for all round enthusiasm and determination of fundraising.
          </li>
        </ul>
        <div className={styles.imageContainer}>
          <ImageComponent
            alt={"My charity skydive."}
            src={"/images/skydive.jpg"}
          />
        </div>
      </div>

      <div className={classNames(styles.item, styles.flipped)}>
        <h4 className={styles.header}>Climbed Kilimanjaro for Charity</h4>
        <ul className={styles.description}>
          <li>
            Managed 24 students throughout the academic year to fundraise{" "}
            <span className={styles.bold}>£68,254.79</span> for The Meningitis
            Research Foundation.
          </li>
          <li>
            Recruited the team, organised socials and group fundraising events,
            managed the team's fundraising and also kept the team morale high.
          </li>
          <li>
            Awarded{" "}
            <span className={styles.bold}>
              “Outstanding Charity Leader of the Year 2015/16”
            </span>
            .
          </li>
        </ul>
        <div className={styles.imageContainer}>
          <Swiper
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <ImageComponent
                alt={"Kilimanjaro group fundraising in a bucket shake."}
                src={"/images/kili_fundraising.jpg"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImageComponent
                alt={"Kilimanjaro group at base camp."}
                src={"/images/kili_base.jpg"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImageComponent
                alt={"Kilimanjaro group at the summit."}
                src={"/images/kili_summit.jpg"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.video}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/qlAt8pHrFtI"
            title="Birmingham Climbs Kilimanjaro 2016"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className={classNames(styles.item, styles.flipped)}>
        <h4 className={styles.header}>Tough Guy 2016 and 2018</h4>
        <ul className={styles.description}>
          <li>
            Took part in Tough Guy 2016 as part of my fundraising and training
            for Kilimanjaro.
          </li>
          <li>
            I had such a great time that I ended up attending Tough Guy 2018
            with a few more friends!
          </li>
        </ul>
        <div className={styles.imageContainer}>
          <Swiper
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <ImageComponent
                alt={"Myself and my friend taking part in tough guy 2016."}
                src={"/images/tough_guy16.jpg"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImageComponent
                alt={"Myself and my friend taking part in tough guy 2018."}
                src={"/images/tough_guy18.jpg"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className={classNames(styles.item, styles.flipped)}>
        <h4 className={styles.header}>Coventry Half Marathon 2016 and 2017</h4>
        <ul className={styles.description}>
          <li>
            Ran Coventry half marathon in 2016 as part of my fundraising and
            training for Kilimanjaro.
          </li>
          <li>Also ran it in 2017 for MathSoc!</li>
        </ul>
        <div className={styles.imageContainer}>
          <Swiper
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <ImageComponent
                alt={"A group of friends running coventry half marathon 2016."}
                src={"/images/covhalf_16.jpg"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImageComponent
                alt={"A group of friends running coventry half marathon 2017."}
                src={"/images/covhalf_17.jpg"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className={classNames(styles.item, styles.flipped)}>
        <h4 className={styles.header}>Treasurer for Carnival RAG 2016/17</h4>
        <ul className={styles.description}>
          <li>
            The society raised more funds from in-house events in Autumn 2016
            than the entire academic year 2015/16.
          </li>
          <li>
            The society was highly commended as{" "}
            <span className={styles.bold}>
              “Outstanding Volunteering Group”
            </span>{" "}
            at the 2017 Guild Awards.
          </li>
        </ul>
        <div className={styles.imageContainer}>
          <ImageComponent
            alt={"Some of the Carnival RAG committee."}
            src={"/images/rag.jpg"}
          />
        </div>
      </div>

      <h4>MathSoc</h4>
      <div className={classNames(styles.item, styles.flipped)}>
        <h4 className={styles.header}>
          President of the Maths Society 2016/17
        </h4>
        <ul className={styles.description}>
          <li>
            Increased participation in all events and increased overall
            membership by 40%.
          </li>
          <li>
            Introduced a new volunteering scheme which gave members the
            opportunity to gain experience in teaching and mentoring.
          </li>
          <li>
            Held new events for our members to engage socially and also raised
            more money for the society's charity of the year than ever before.
          </li>
          <li>
            Awarded first ever Guild Award for the{" "}
            <span className={styles.bold}>“Most Improved Society 2017”</span>.
            The society also won 3 awards at the EPS Awards 2017:{" "}
            <span className={styles.bold}>Volunteer of the Year</span> (to the
            Volunteering Officer),{" "}
            <span className={styles.bold}>Diversity and Inclusion Award</span>{" "}
            and <span className={styles.bold}>Role Model of the Year</span>{" "}
            (awarded to myself).
          </li>
        </ul>
        <div className={styles.imageContainer}>
          <ImageComponent
            alt={
              "Mathsoc committee accepting our award at the guild awards for most improved society."
            }
            src={"/images/mathsoc.jpg"}
          />
        </div>
      </div>
    </div>

    <div className={styles.aboutSection}>
      <h3 className={styles.bigHeader}>Hobbies and Interests</h3>
      <div className={styles.hobbies}>
        <ul className={styles.description}>
          <li>
            I enjoy reading sci-fi novels, running and cooking. In my spare time
            I enjoy playing a range of video games and working on personal
            projects.
          </li>
          <li>I'm going to be running the 2023 Brighton Marathon!</li>
          <li>I've done a bunjee jump too (twice!).</li>
        </ul>
        <div className={styles.video}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/XoRlQP1T65g"
            title="300ft Bungee Jump"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutComponent;
