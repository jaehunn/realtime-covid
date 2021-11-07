import React from "react";
import { RegionTableField } from ".";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegionTableFields = ({ fields, sortTypesData, setSortTypesData, setTargetSortTypeIndex }) => {
  const handleSortIconClick = (index) => {
    const newSortTypesData = [...sortTypesData];
    const currentSortType = sortTypesData[index];
    newSortTypesData[index] = currentSortType === "desc" ? "inc" : "desc";

    setTargetSortTypeIndex(index);
    setSortTypesData(newSortTypesData);
  };

  return (
    <div className="flex justify-evenly sm:text-sm text-xs leading-4 tracking-wide font-semibold bg-blue-200 dark:text-gray-200 dark:bg-gray-500">
      {fields.map((field, index) => {
        const currentFieldSortType = sortTypesData[index];

        return (
          <div key={`fieldContainer${index}`} className="flex items-center cursor-pointer" onClick={() => handleSortIconClick(index)}>
            <RegionTableField key={`field${index}`} field={field} />
            {currentFieldSortType === "desc" ? (
              <FontAwesomeIcon key={`sortIcon${index}`} icon={faSortDown} />
            ) : (
              <FontAwesomeIcon key={`sortIcon${index}`} icon={faSortUp} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(RegionTableFields);
