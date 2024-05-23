import { useEffect, useState } from "react";

function useDebounce(inputString, milsec) {
  const [string, setString] = useState(inputString);

  useEffect(() => {
    const clearValue = setTimeout(() => {
      setString(inputString);
    }, milsec);

    return () => {
      clearTimeout(clearValue);
    };
  }, [inputString]);
  return string;
}

export { useDebounce };
