import React, { useState, useEffect } from "react";
import { RegionItem, RegionTableFields } from ".";

// recordsData 에 records 가 반영이 늦게된다. 비동기 처리
const RegionTable = ({ regionTableInfosItems, children = null }) => {
  const { fields, sortTypes, records } = regionTableInfosItems;
  const classes = `lg:w-3/5 relative flex flex-col pb-10 mb-10 mt-16 mx-auto border-b border-gray-800 shadow-lg rounded-md bg-blue-50 dark:bg-gray-600 overflow-x-auto`;

  const [recordsData, setRecordsData] = useState(records);
  const [sortTypesData, setSortTypesData] = useState(sortTypes);
  const [targetSortTypeIndex, setTargetSortTypeIndex] = useState(0);

  useEffect(() => {
    const targetSortTypesData = sortTypesData[targetSortTypeIndex];
    let newRecordsData = [];
    if (targetSortTypeIndex === 0) {
      newRecordsData = [...recordsData].sort((recordDataA, recordDataB) => {
        const targetFieldA = recordDataA[targetSortTypeIndex]["region"];
        const targetFieldB = recordDataB[targetSortTypeIndex]["region"];

        if (targetSortTypesData === "desc") return targetFieldA < targetFieldB ? 1 : -1;

        return targetFieldA < targetFieldB ? -1 : 1;
      });
    } else {
      newRecordsData = [...recordsData].sort((recordDataA, recordDataB) => {
        const targetFieldA = +recordDataA[targetSortTypeIndex]["number"];
        const targetFieldB = +recordDataB[targetSortTypeIndex]["number"];

        if (targetSortTypesData === "desc") {
          if (targetFieldA === targetFieldB) return 0;

          return targetFieldA < targetFieldB ? 1 : -1;
        }

        if (targetFieldA === targetFieldB) return 0;

        return targetFieldA < targetFieldB ? -1 : 1;
      });
    }

    setRecordsData(newRecordsData);
  }, [sortTypesData, targetSortTypeIndex]);

  return (
    <div className={classes}>
      <div className="lg:w-full w-screen overflow-x-auto">
        <RegionTableFields
          fields={fields}
          sortTypesData={sortTypesData}
          setSortTypesData={setSortTypesData}
          setTargetSortTypeIndex={setTargetSortTypeIndex}
        />
        {recordsData.map((recordData, index) => {
          const region = recordData[0]["region"];
          const regionRecord = recordData.slice(1);

          return <RegionItem key={`regionItem${index}`} region={region} regionRecord={regionRecord} />;
        })}

        {children ? children : <></>}
      </div>
    </div>
  );
};

export default React.memo(RegionTable);
