import React, { useRef, useEffect } from "react";

const FetchMoreTrigger = ({ page, setPage }) => {
  const fetchMoreTriggerEl = useRef(null);

  useEffect(() => {
    const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting && page <= 4) setPage((page) => page + 1);
    });

    fetchMoreObserver.observe(fetchMoreTriggerEl.current);

    return () => {
      fetchMoreObserver.disconnect();
    };
  }, []);

  return <div className="absolute bottom-0 left-0 right-0" ref={fetchMoreTriggerEl}></div>;
};

export default React.memo(FetchMoreTrigger);
