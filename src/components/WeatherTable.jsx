import { Table, Container } from "react-bootstrap";

const WeatherTable = ({ forecastList }) => {
  return (
    <Container className="mt-4 p-0 shadow rounded-4 overflow-hidden">
      <Table hover responsive variant="dark" className="m-0 text-center">
        <thead className="bg-secondary">
          <tr>
            <th>Orario</th>
            <th>Meteo</th>
            <th>Temp.</th>
            <th>Percepita</th>
            <th>Max / Min</th>
          </tr>
        </thead>
        <tbody>
          {forecastList.slice(0, 8).map((item, index) => (
            <tr key={index}>
              <td className="fw-bold">
                {item.dt_txt.split(" ")[1].substring(0, 5)}
              </td>
              <td>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt="icon"
                />
              </td>
              <td className="text-info fw-bold">
                {Math.round(item.main.temp)}°C
              </td>
              <td>{Math.round(item.main.feels_like)}°C</td>
              <td>
                <span className="text-danger">
                  {Math.round(item.main.temp_max)}°
                </span>{" "}
                /{" "}
                <span className="text-primary">
                  {Math.round(item.main.temp_min)}°
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default WeatherTable;
