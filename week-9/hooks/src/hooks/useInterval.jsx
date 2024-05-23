import { useEffect, useState } from "react";

function useInterval(callback, sec) {
  useEffect(() => {
    const value = setInterval(callback, sec * 1000);
    return () => {
      clearInterval(value);
    };
  }, [callback]);
}

export { useInterval };
