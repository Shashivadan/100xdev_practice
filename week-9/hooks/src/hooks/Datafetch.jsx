import axios from "axios";
import { useEffect, useState } from "react";

// solution one for data hooks
function useTodos(n) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const res = await axios.get("https://sum-server.100xdevs.com/todos?id=1");
    const info = await res.data.todos;
    setLoading(false);
    setData(info);
  }

  useEffect(() => {
    const clearValue = setInterval(fetchData, n * 1000);
    fetchData();
    return () => {
      clearInterval(clearValue);
    };
  }, [n]);

  return [data, loading];
}

function useIsOnline() {
  const [live, setlive] = useState(window.navigator.onLine);

  useEffect(() => {
    setlive(window.navigator.onLine);
  }, []);
  return live;
}

export { useTodos, useIsOnline };
