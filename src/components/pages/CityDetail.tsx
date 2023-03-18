import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import cities from "../arrays/nor.json";
import { locForecast } from "../api/locationForecast";
import City from "../types/city";

function CityDetail() {
  const { city } = useParams();
  const [cityState, setCityState] = useState<City>();
  const [error, setError] = useState<Boolean>(false);
  const [cityData, setCityData] = useState([]);
  useEffect(() => {
    const currentCity = cities.find((cit: City) => {
      return cit.city === city;
    });
    if (currentCity) {
      const lat = Number(currentCity.lat).toFixed(2);
      const lng = Number(currentCity.lng).toFixed(2);
      setCityState({ ...currentCity, lat, lng });
    }
  }, [city]);

  useEffect(() => {
    async function getCityData() {
      if (cityState) {
        const weatherApi = locForecast + `?lat=${cityState?.lat}&lon=${cityState?.lng}`;
        try {
          const response = await fetch(weatherApi);
          const json = await response.json();
          console.log(json.properties);
          if (json.properties) {
            setCityData(json.properties);
          }
        } catch (error) {
          console.log(error);
          setError(true);
        }
      }
    }
    getCityData();
  }, [cityState]);

  return (
    <div className="p-10">
      {error && <h1>GTFO</h1>}
      <h1 className="text-5xl font-bold">{city}</h1>
      <ul>{cityData && <li>s</li>}</ul>
    </div>
  );
}

export default CityDetail;

// const [cityState, setCityState] = useState({});
