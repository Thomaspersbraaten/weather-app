import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import cities from "../arrays/nor.json";
import { locForecast } from "../api/locationForecast";
import City from "../types/city";

function CityDetail() {
  const { city } = useParams();
  const [cityState, setCityState] = useState();
  console.log(city);
  useEffect(() => {
    console.log(cities);
    const currentCity = cities.filter((cit) => {
      return cit.city === city;
    });
    console.log(currentCity);
    setCityState(currentCity);

    async function getWeatherForCity() {
      const weaterApi = locForecast + `?lat=${currentCity.lat}`;
      try {
      } catch (error) {
        console.log(error);
      }
    }
  }, [city]);

  return <div>CityDetail</div>;
}

export default CityDetail;
