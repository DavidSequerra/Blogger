import { useEffect, useState, useContext } from "react";
import axios from "axios";
import HostRenderCtx from '../../context/hostContext';

export default function InfiniteSearch(query, pageNumber) {
   const urlRender = useContext(HostRenderCtx); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(false);
 

  useEffect(() => {
    setItems([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "POST",
      url: `${ urlRender }/blogs/infinite`,
      data: { query: query, pageNumber: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setItems((prevItems) => {
          return [...new Set([...prevItems, ...res.data.map((i) => i.title)])];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, items, hasMore };
}
