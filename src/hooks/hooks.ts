import { MutableRefObject, useEffect, useRef, useState } from "react";

type Dims = { width: number; height: number };

export const useDims = <T>(): [MutableRefObject<T | null>, Dims] => {
  const ref = useRef<T | null>(null);
  const [dims, setDims] = useState<Dims>({ width: 1000, height: 10000 });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect;
        setDims({ width, height });
      }
    });

    if (ref.current instanceof Element) resizeObserver.observe(ref.current);
    () => resizeObserver.disconnect();
  }, [ref]);

  return [ref, dims];
};

// used to detect which project is on screen so we can autoplay the correct one
export const useIsInViewport = (
  ref: React.MutableRefObject<HTMLVideoElement | null>
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    setObserver(
      new IntersectionObserver(
        ([entry]) => setIsIntersecting(entry.isIntersecting),
        { rootMargin: "-50% 0% -40% 0%" }
      )
    );
  }, []);

  useEffect(() => {
    observer?.observe(ref.current as Element);

    return () => {
      observer?.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};
