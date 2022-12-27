
import { useEffect, useState, useRef } from "react";

const Test = () => {
  const [numbers, setNumbers] = useState([0, 1, 2]);
  const listItems = useRef(null);

  useEffect(() => {
    const lastItem = listItems.current.lastElementChild;
    if (lastItem) {
      lastItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [numbers]);

  return (
    <div ref={listItems}>
      {numbers.map((number) =>)}
      <button>Add number</button>
    </div>
  );
};

export default Test;