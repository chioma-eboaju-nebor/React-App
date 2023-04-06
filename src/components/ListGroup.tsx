import { useState } from "react";


function ListGroup() {
  let items = ["Paris", "Newyork", "Tokyo", "Nigeria"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  

  return (
    <>
      <h1>List of items</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p> No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => { setSelectedIndex(index); }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
