import { useState } from "react";


interface ListGroupProps {
    items: string[];
    Heading: string;
}

function ListGroup({ items, Heading }: ListGroupProps) {
  
  const [selectedIndex, setSelectedIndex] = useState(-1);
  

  return (
    <>
      <h1>{ Heading }</h1>
    
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
