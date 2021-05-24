import React from "react";
import { RegionTableField } from ".";

const RegionTableFields = ({ fields }) => {
  return (
    <div className="flex justify-evenly sm:text-sm text-xs leading-4 tracking-wide font-semibold bg-blue-200 dark:text-gray-200 dark:bg-gray-500">
      {fields.map((field, index) => (
        <RegionTableField key={`field${index}`} field={field} />
      ))}
    </div>
  );
};

export default React.memo(RegionTableFields);
