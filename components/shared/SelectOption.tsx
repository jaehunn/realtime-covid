import React from "react";

const SelectOption = ({ options, handler }) => {
  const classes = `flex flex-start text-sm leading-2 rounded-full py-1 px-2 bg-blue-100 border-2 border-blue-400 border-opacity-75 m-4 cursor-pointer outline-none dark:bg-gray-500`;

  return (
    <select className={classes} onChange={handler}>
      {options.map(({ value, name }, index) => (
        <option key={`option${index}`} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default React.memo(SelectOption);
