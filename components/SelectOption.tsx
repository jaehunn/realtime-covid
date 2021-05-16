import React from "react";

const SelectOption = ({ selectOptions }) => {
  return (
    <div className="flex">
      {selectOptions.map(({ options, handler }, index) => (
        <select
          key={index}
          className="flex flex-start text-sm leading-2 rounded-full py-1 px-2 bg-blue-100 border-2 border-blue-400 border-opacity-75 m-4 cursor-pointer outline-none dark:bg-gray-500"
          onChange={handler}
        >
          {options.map(({ value, name }, index) => (
            <option key={index} value={value}>
              {name}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default React.memo(SelectOption);
