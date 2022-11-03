import { MutableRefObject, useEffect, useRef, useState } from "react";

type Dims = { width: number; height: number };

export function useDims<T>(): [MutableRefObject<T | null>, Dims] {
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
}
