import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const [selected, setSelected] = useState(null);

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];

  return (
    <div className="flex">
      <Dropdown
        options={options}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default DropdownPage;
