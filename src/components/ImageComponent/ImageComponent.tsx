import styles from "./ImageComponent.module.scss";
import React from "react";
import Image from "next/image";

export type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const ImageComponent: React.FC<Props> = ({ src, alt }) => (
  <div className={styles.container}>
    <Image src={src} alt={alt} fill sizes="600px" />
  </div>
);

export default ImageComponent;
