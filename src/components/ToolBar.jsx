import { useState } from "react";
import { ListGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const ToolBar = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

  const places = (research) => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${research}&limit=5&appid=d85c199fc44d1cb4c6a19d30a6f7a971`,
    )
      .then((response) => {
        if (!response.ok) throw new Error("Errore nel recupero dati");
        return response.json();
      })
      .then((data) => {
        console.log("Dati arrivati dall'API:", data);
        setResults(data);
      })
      .catch((err) => {
        console.error("Errore nella chiamata:", err);
      });
  };

  return (
    <div className="p-3">
      <Form.Control
        type="text"
        placeholder="Search city (es: Rome)..."
        onChange={(e) => {
          const value = e.target.value;
          clearTimeout(window.searchTimer);

          if (value.length > 2) {
            window.searchTimer = setTimeout(() => {
              places(value);
            }, 500);
          } else {
            setResults([]);
          }
        }}
      />

      {results && results.length > 0 && (
        <ListGroup className="mt-2 shadow">
          {results.map((citta, index) => (
            <ListGroup.Item
              key={index}
              action
              onClick={() => navigate(`/detail/${citta.lat}/${citta.lon}`)}
            >
              <strong>{citta.name}</strong> -{" "}
              {citta.state ? `${citta.state}, ` : ""}
              {citta.country}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default ToolBar;
