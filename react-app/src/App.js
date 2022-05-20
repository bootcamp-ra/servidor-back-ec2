import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>} />
        <Route
          path="/items"
          element={
            <div className="App">
              {items.map((item) => (
                <div>{JSON.stringify(item)}</div>
              ))}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
