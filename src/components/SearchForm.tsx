import { useState, useEffect } from "react";
import cities from "./arrays/nor.json";
function SearchForm() {
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const theCities = cities.filter((city) => city.city.toLowerCase().includes(input.toLowerCase()));
    console.log(theCities);
  }, [input]);
  return (
    <form>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search for anything..."
        type="text"
        name="search"
      />
      <button className="bg-sky-500 hover:bg-sky-700 rounded-3xl p-2 m-3">Save changes</button>
    </form>
  );
}

export default SearchForm;
