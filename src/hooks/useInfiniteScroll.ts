import { useRef, useEffect } from "react";

const useInfiniteScroll = (page, setPage) => {
  const fetchMoreTriggerEl = useRef(null);

  useEffect(() => {
    const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting && page <= 4) setPage((page) => page + 1);
    });

    fetchMoreObserver.observe(fetchMoreTriggerEl.current);

    return () => {
      fetchMoreObserver.disconnect();
    };
  }, [fetchMoreTriggerEl, page, setPage]);

  return { fetchMoreTriggerEl };
};

export default useInfiniteScroll;
