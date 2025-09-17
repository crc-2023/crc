import { useEffect, useState } from 'react';

export default function useFetch(fn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fn()
      .then(res => { if (mounted) setData(res); })
      .catch(e => { if (mounted) setErr(e); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading, err };
}
