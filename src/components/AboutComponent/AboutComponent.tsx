import styles from "./AboutComponent.module.scss";
import React from "react";
import ImageComponent from "../ImageComponent";

export type Props = {
  emptyProp?: boolean;
};

const AboutComponent: React.FC<Props> = ({}) => (
  <section className={styles.container}>
    <div className={styles.aboutSection}>
      <h3>Education Achievements</h3>
      <h4>B.Sci Mathematics- Class I with honours. (80%)</h4>
      <ImageComponent
        alt={"My friends and I at our graduation."}
        src={"/images/maths_grad.jpg"}
      />
      <h4>
        M.Sc. Computer Science- Distinction (83.9%). Awarded "Best Student in
        M.Sc. Computer Science" for highest grade.
      </h4>
      <ImageComponent
        src={"/images/me.jpg"}
        alt={"Image of me at my M.Sc Computer Science graduation."}
      />
    </div>
    <div className={styles.aboutSection}>
      <h3>Extra Curricula Achievments</h3>
      <h4>Carnival RAG</h4>
      <ul>
        <li>
          Charity Skydive- Raised £409.85 for The Children's Society and
          participated in a tandem skydive. Awarded “Skydiver of the Year
          2014/15” for all round enthusiasm and determination of fundraising.
          <ImageComponent
            alt={"My charity skydive."}
            src={"/images/skydive.jpg"}
          />
        </li>
        <li>
          Climbing Kilimanjaro- Managed 24 students throughout the academic year
          to fundraise £68,254.79 for The Meningitis Research Foundation.
          Recruited the team, organised socials and group fundraising events,
          managed the team’s fundraising and also kept the team morale high.
          Awarded “Outstanding Charity Leader of the Year 2015/16”.
          <ImageComponent
            alt={"Kilimanjaro group fundraising in a bucket shake."}
            src={"/images/kili_fundraising.jpg"}
          />
          <ImageComponent
            alt={"Kilimanjaro group at base camp."}
            src={"/images/kili_base.jpg"}
          />
          <ImageComponent
            alt={"Kilimanjaro group at the summit."}
            src={"/images/kili_summit.jpg"}
          />
          <div className={styles.video}>
            <iframe
              width="480"
              height="270"
              src="https://www.youtube.com/embed/qlAt8pHrFtI"
              title="Birmingham Climbs Kilimanjaro 2016"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p>
            As part of my own training and fundraising for the Kilimanjaro
            challenge I took part in:
          </p>
          <ul>
            <li>
              Tough Guy 2016:
              <ImageComponent
                alt={"Myself and my friend taking part in tough guy 2016."}
                src={"/images/tough_guy16.jpg"}
              />
              I had such a great time that I ended up attending Tough Guy 2017
              with a few more friends!
              <ImageComponent
                alt={"Myself and my friend taking part in tough guy 2017."}
                src={"/images/tough_guy17.jpg"}
              />
            </li>
            <li>
              Coventry Half Marathon 2016
              <ImageComponent
                alt={"A group of friends running coventry half marathon 2016."}
                src={"/images/covhalf_16.jpg"}
              />
            </li>
          </ul>
        </li>
        <li>
          Treasurer for Carnival RAG 2016- The society raised more funds from
          in-house events in Autumn 2016 than the entire academic year 2015/16.
          Furthermore, the society was highly commended as “Outstanding
          Volunteering Group” at the 2017 Guild Awards.
          <ImageComponent
            alt={"Some of the Carnival RAG committee."}
            src={"/images/rag.jpg"}
          />
        </li>
      </ul>
      <h4>MathSoc</h4>
      <ul>
        <li>
          President- Running this award winning society improved organisational
          and leadership skills. Increased participation in all events,
          increased overall membership by 40\%, introduced a new volunteering
          scheme which gives members the opportunity to gain experience in
          teaching and mentoring, held new events for our members to engage
          socially and also raised more money for the society’s charity of the
          year than ever before. Awarded first ever Guild Award for the “Most
          Improved Society 2017”. The society also won 3 awards at the EPS
          Awards 2017: Volunteer of the Year (to the Volunteering Officer),
          Diversity and Inclusion Award and Role Model of the Year (awarded to
          myself).
          <ImageComponent
            alt={
              "Mathsoc committee accepting our award at the guild awards for most improved society."
            }
            src={"/images/mathsoc.jpg"}
          />
        </li>
      </ul>
    </div>
    <div className={styles.aboutSection}>
      <h3>HOBBIES AND INTERESTS</h3>
      <p>
        I enjoy reading sci-fi novels, running and cooking. In my spare time I
        enjoy playing a range of video games and working on personal projects.
      </p>
      <p>I've done a bunjee jump too (twice!).</p>
    </div>
  </section>
);

export default AboutComponent;
