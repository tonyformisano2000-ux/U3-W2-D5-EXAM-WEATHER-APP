import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Location = ({ lat, lon }) => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=d85c199fc44d1cb4c6a19d30a6f7a971`,
    )
      .then((res) => res.json())
      .then((data) => setResults(data));
  }, [lat, lon]);

  if (!results) return <p className="text-center mt-5">Loading...</p>;

  const icon = results.list[0].weather[0].icon;
  let bgColor = "bg-primary";
  if (icon.includes("01") || icon.includes("02"))
    bgColor = "bg-warning text-dark";
  if (icon.includes("n")) bgColor = "bg-dark text-white";

  return (
    <Container
      className={`${bgColor} p-4 rounded-4 shadow mt-3 transition-all`}
    >
      <Row className="align-items-center">
        <Col>
          <h1 className="display-4 fw-bold">{results.city.name}</h1>
          <p className="lead text-capitalize">
            {results.list[0].weather[0].description}
          </p>
        </Col>
        <Col className="text-end">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            alt="weather"
          />
          <h2 className="display-2">
            {Math.round(results.list[0].main.temp)}°C
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Location;
