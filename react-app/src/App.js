import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/hello`);
        const data = await response.json();
        setItems(data.users);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {items.map((item) => (
        <div>{JSON.stringify(item)}</div>
      ))}
    </div>
  );
}

export default App;
