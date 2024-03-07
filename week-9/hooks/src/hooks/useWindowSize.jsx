import { useEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState({ width: null, hight: null });

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setSize({ width: window.screen.width, hight: window.screen.height });
    });
    return () => {
      window.addEventListener("resize", (e) => {
        setSize({ width: window.screen.width, hight: window.screen.height });
      });
    };
  }, []);
  return size;
}

export { useWindowSize };
