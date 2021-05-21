import React from "react";
import { RegionItem, RegionTableFields } from ".";

const RegionTable = ({ regionTableInfosItems, children = null }) => {
  const { fields, records } = regionTableInfosItems;
  const classes = `lg:w-3/5 relative flex flex-col pb-10 mb-10 mt-16 mx-auto border-b border-gray-800 shadow-lg rounded-md bg-blue-50 dark:bg-gray-600`;

  return (
    <div className={classes}>
      <RegionTableFields fields={fields} />
      {records.map(({ region, regionRecord }, index) => (
        <RegionItem key={`regionItem${index}`} region={region} regionRecord={regionRecord} />
      ))}

      {children ? children : <></>}
    </div>
  );
};

export default React.memo(RegionTable);
