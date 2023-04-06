import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Paris", "Newyork", "Tokyo", "Nigeria"];
  //let selectedItem = 0;
  // items = [];

  /* const getMessage = () => {
        return items.length === 0 ? <p> No item found</p> : null
    } */

    //Event handler
    const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List of items</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p> No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
