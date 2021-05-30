import React from "react";
import { useInfiniteScroll } from "../../hooks";

// not use
const FetchMoreTrigger = ({ page, setPage }) => {
  const { fetchMoreTriggerEl } = useInfiniteScroll(page, setPage);

  return <div className="absolute bottom-0 left-0 right-0" ref={fetchMoreTriggerEl}></div>;
};

export default React.memo(FetchMoreTrigger);
