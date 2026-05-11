import { useParams } from "react-router-dom";
import Location from "./Location";
import WeatherTable from "./WeatherTable";
import { useState, useEffect } from "react";

const Detail = () => {
  const [results, setResults] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${params.lat}&lon=${params.lon}&appid=d85c199fc44d1cb4c6a19d30a6f7a971`,
    )
      .then((response) => {
        if (!response.ok) throw new Error("Errore nel recupero dati");
        return response.json();
      })
      .then((data) => {
        console.log("Dati arrivati dall'API DETAILS:", data);
        setResults(data.list);
      })
      .catch((err) => {
        console.error("Errore nella chiamata:", err);
      });
    console.log("dati di Roma ", results);
  }, [params.lat, params.lon]);
  if (!results || !results.list) {
    return (
      <p className="text-center mt-5 text-white">Caricamento previsioni...</p>
    );
  }
  return (
    <>
      <Location lat={params.lat} lon={params.lon}></Location>
      <WeatherTable forecastList={results.list} />
    </>
  );
};
export default Detail;
