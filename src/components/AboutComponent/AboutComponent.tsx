import styles from "./AboutComponent.module.scss";
import React from "react";
import Link from "next/link";
import ImageComponent from "../ImageComponent";

export type Props = {
  emptyProp?: boolean;
};

const AboutComponent: React.FC<Props> = ({}) => (
  <section className={styles.container}>
    <Link className={styles.link} target={"_blank"} href="/Ed_Wong_CV.pdf">
      See my full CV here.
    </Link>

    <div className={styles.aboutSection}>
      <h3>HOBBIES AND INTERESTS</h3>
      <p>
        I enjoy reading sci-fi novels, running and cooking. In my spare time I
        enjoy playing a range of video games and working on personal projects.
      </p>
    </div>

    <div className={styles.aboutSection}>
      <h3>ACHIEVEMENTS AND EXTRA CURRICULA</h3>
      <h4>Carnival RAG</h4>
      <ul>
        <li>
          Charity Skydive- Raised £409.85
          <ImageComponent
            alt={"My charity skydive."}
            src={"/images/skydive.jpg"}
            width={400}
            height={400}
          />
        </li>
        <li>
          Climbing Kilimanjaro
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
        </li>
        <li>
          Treasurer for Carnival RAG 2016
          <ImageComponent
            alt={"Some of the Carnival RAG committee."}
            src={"/images/rag.jpg"}
            width={400}
            height={400}
          />
        </li>
      </ul>
      <h4>MathSoc</h4>
      <ul>
        <li>
          President
          <ImageComponent
            alt={"My charity skydive, "}
            src={"/images/mathsoc.jpg"}
            width={400}
            height={400}
          />
        </li>
      </ul>
    </div>
  </section>
);

export default AboutComponent;
