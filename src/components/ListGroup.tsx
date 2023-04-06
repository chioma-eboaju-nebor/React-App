function ListGroup() {
    const items = [
        'Paris',
        'Newyork',
        'Tokyo',
        'Nigeria'
    ] ;

    
  return (
    <>
    <h1>List of items</h1>
    <ul className="list-group">
    {items.map(item => 
       <li key = {item}>{item}</li>
    )}
    </ul>
    </>
  );
}

export default ListGroup;
