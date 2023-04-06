import ListGroup  from "./components/ListGroup";


//React Component
function App(){
  let items = ["Paris", "Newyork", "Tokyo", "Nigeria"];

  return <div><ListGroup items={items} Heading="Cities" /></div>;
}

export default App;