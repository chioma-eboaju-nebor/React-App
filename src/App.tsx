import ListGroup  from "./components/ListGroup";


//React Component
function App(){
  let items = ["Paris", "Newyork", "Tokyo", "Nigeria"];
  
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <div><ListGroup items={items} Heading="Cities" onSelectItem={handleSelectItem} /></div>;
}

export default App;