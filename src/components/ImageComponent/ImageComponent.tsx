import styles from "./ImageComponent.module.scss";
import React from "react";
import Image from "next/image";

export type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  emptyProp?: boolean;
};

const ImageComponent: React.FC<Props> = ({ src, alt, width, height }) => (
  <div
    className={styles.container}
    style={{ width: width || "auto", height: height || "auto" }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      // objectFit={"cover"}
      // width={width}
      // height={height}
    />
  </div>
);

export default ImageComponent;
