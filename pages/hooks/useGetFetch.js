import { useEffect, useState } from 'react';

function useGetFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
    };

    async function fetchGet() {
      try {
        const apiParams = { method: 'GET', headers };
        const res = await fetch(url, apiParams);
        if (res.status >= 400) {
          setData([]);
        } else {
          const json = await res.json();
          setData(json);
        }
      } catch (error) {
        console.error('Failed to fetch:', error);
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    if (url) {
      fetchGet();
    } else {
      setData([]);
      setLoading(false);
    }
  }, [url]);

  return [data, loading];
}

export default useGetFetch;
  
  