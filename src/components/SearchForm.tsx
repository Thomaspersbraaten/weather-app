import { useState, useEffect } from "react";
import cities from "./arrays/nor.json";
import { locForecast } from "./api/locationForecast";

interface City {
  admin_name: string;
  capital: string;
  city: string;
  iso2: string;
  lat: string;
  lng: string;
  population: string;
  population_proper: string;
}

function SearchForm() {
  const [input, setInput] = useState<string>("");
  const [citiesSelection, setCitiesSelection] = useState<City[]>([]);
  const [lng, setLng] = useState<String>("");
  const [lat, setLat] = useState<String>("");
  const [currentCity, setCurrentCity] = useState<City>();

  useEffect(() => {
    if (input.length >= 1) {
      const theCities = cities.filter((city) => city.city.toLowerCase().includes(input.toLowerCase()));
      const reducedCitiesArray = theCities.slice(0, 5);
      setCitiesSelection(reducedCitiesArray);
      console.log(reducedCitiesArray);
    }
    if (input.length === 0) {
      setCitiesSelection([]);
    }
  }, [input]);

  // async function enterCity(cit: City) {
  //   setLat(cit.lat);
  //   setLng(cit.lng);
  // }

  return (
    <form>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
        placeholder="Search for anything..."
        type="text"
        name="search"
      />
      {citiesSelection &&
        citiesSelection.map((cit) => (
          <div
            key={cit.city}
            className="bg-cyan-300 p-2 m-2 rounded-md text-stone-800 font-bold"
            onClick={() => {
              setLat(cit.lat);
              setLng(cit.lng);
              // setCurrentCity(cit);
            }}
          >
            {cit.city}
          </div>
        ))}
      <button className="bg-sky-500 hover:bg-sky-700 rounded-3xl p-2 m-3">Save changes</button>
    </form>
  );
}

export default SearchForm;
