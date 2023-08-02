import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        setQuotes(data.quotes.slice(0, 10));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Top 10 Quotes</h1>
      <ul>
        {quotes.map((value, index) => (
          <li key={index}>
            <p> {value.quote}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
