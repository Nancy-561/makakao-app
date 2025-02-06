import React, { useState } from "react";

import { StyledDropdown } from "./Dropdown.styles";

export const Dropdown = ({ value, options = [], handleSelect }) => {
  const [selectedOption, setSelectedOption] = useState(
    value || "Please Select"
  );

  const handleSelection = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
    if (handleSelect) {
      handleSelect(option);
    }
  };

  return (
    <StyledDropdown value={selectedOption} onChange={handleSelection}>
      {options.map((option) => (
        <option key={option}>
          {option}
        </option>
      ))}
    </StyledDropdown>
  );
};
