  import { isEmpty } from 'lodash-next';
  import { useEffect, useState } from 'react';
  
  function useGetFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const headers = {
        'Content-Type': 'application/json',
      };
  
      async function fetchGet() {
        const apiParams = { method: 'GET', headers };
        const res = await fetch(url, apiParams);
        if (res.status >= 400) {
          setData([]);
        } else {
          const json = await res.json();
          setData(json);
        }
        setLoading(false);
      }
      if (!isEmpty(url)) {
        fetchGet();
      } else {
        setData([]);
        setLoading(false);
      }
    }, [url]);
  
    return [data, loading];
  }
  export default useGetFetch;
  
  