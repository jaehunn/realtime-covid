import React from "react";
import { RegionItem, RegionTableFields } from ".";

const RegionTable = ({ regionTableInfosItems, children = null }) => {
  const { fields, records } = regionTableInfosItems;
  const classes = `lg:w-3/5 relative flex flex-col pb-10 mb-10 mt-16 mx-auto border-b border-gray-800 shadow-lg rounded-md bg-blue-50 dark:bg-gray-600 overflow-x-auto`;

  return (
    <div className={classes}>
      <div className="lg:w-full w-screen overflow-x-auto">
        <RegionTableFields fields={fields} />
        {records.map(({ region, regionRecord }, index) => (
          <RegionItem key={`regionItem${index}`} region={region} regionRecord={regionRecord} />
        ))}

        {children ? children : <></>}
      </div>
    </div>
  );
};

export default React.memo(RegionTable);
