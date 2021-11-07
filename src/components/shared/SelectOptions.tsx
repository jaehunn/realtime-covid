import React from "react";
import { SelectOption } from ".";

const SelectOptions = ({ selectOptions }) => {
  return (
    <div className="flex">
      {selectOptions.map(
        ({ options, handler }, index) => !!options.length && <SelectOption key={`selectOption${index}`} options={options} handler={handler} />
      )}
    </div>
  );
};

export default React.memo(SelectOptions);
