import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <div className="border-x border-t rounded max-w-lg">
      {items.map((item, index) => (
        <div key={item.id}>
          <h3
            className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
            onClick={() =>
              setExpandedIndex((current) => (current === index ? -1 : index))
            }
          >
            {item.label}
            <span className="text-2xl">
              {index === expandedIndex ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
          </h3>
          {index === expandedIndex ? (
            <p className="border-b p-5">{item.content}</p>
          ) : (
            <p></p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
