import { useRef, useEffect } from "react";

const FetchMoreTrigger = ({ page, setPage }) => {
  const fetchMoreTriggerEl = useRef(null);

  useEffect(() => {
    const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
      // page 가 계속 증가되는 이슈
      if (isIntersecting && page <= 4) setPage((page) => page + 1);
    });

    fetchMoreObserver.observe(fetchMoreTriggerEl.current);

    return () => {
      fetchMoreObserver.disconnect();
    };
  }, []);

  return <div className="absolute bottom-0 left-0 right-0" ref={fetchMoreTriggerEl}></div>;
};

export default FetchMoreTrigger;
