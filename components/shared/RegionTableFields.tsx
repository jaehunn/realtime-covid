import React from "react";
import { RegionTableField } from ".";

const RegionTableFields = ({ fields }) => {
  return (
    <div className="w-full bg-blue-200 flex justify-evenly text-sm leading-8 tracking-wide font-semibold dark:text-gray-200 dark:bg-gray-500">
      {fields.map((field, index) => (
        <RegionTableField key={`field${index}`} field={field} />
      ))}
    </div>
  );
};

export default React.memo(RegionTableFields);
