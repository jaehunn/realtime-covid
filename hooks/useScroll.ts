import { useState, useEffect } from "react";

const useScroll = (overseasCovidItems) => {
  const REGION_ITEMS_PER_PAGE = 38;
  const [page, setPage] = useState(1);

  const [todayOverseasCovidItems, setTodayOverseasCovidItems] = useState([]);
  const todayOverseasCovidItemsStartIndex = 0;

  const [yesterdayOverseasCovidItems, setYesterdayOverseasCovidItems] = useState([]);
  const yesterdayOverseasCovidItemsStartIndex = 190;

  const [dayBeforeYesterdayOverseasCovidItems, setDayBeforeYesterdayOverseasCovidItems] = useState([]);
  const dayBeforeYesterdayOverseasCovidItemsStartIndex = 380;

  useEffect(() => {
    if (page <= 5) {
      setTodayOverseasCovidItems(
        overseasCovidItems.slice(todayOverseasCovidItemsStartIndex, todayOverseasCovidItemsStartIndex + REGION_ITEMS_PER_PAGE * page)
      );

      setYesterdayOverseasCovidItems(
        overseasCovidItems.slice(yesterdayOverseasCovidItemsStartIndex, yesterdayOverseasCovidItemsStartIndex + REGION_ITEMS_PER_PAGE * page)
      );

      setDayBeforeYesterdayOverseasCovidItems(
        overseasCovidItems.slice(
          dayBeforeYesterdayOverseasCovidItemsStartIndex,
          dayBeforeYesterdayOverseasCovidItemsStartIndex + REGION_ITEMS_PER_PAGE * page
        )
      );
    }
  }, [page]);

  return { todayOverseasCovidItems, yesterdayOverseasCovidItems, dayBeforeYesterdayOverseasCovidItems, page, setPage };
};

export default useScroll;
