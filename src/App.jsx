import "./App.css";
import React, { useState } from "react";
import { PostalCode } from "./components/PostalCode.jsx";
import { LocationInfo } from "./components/LocationInfo.jsx";
function App() {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLocationInfo = (zipCode) => {
    setLoading(true);
    setError(null);

    fetch(`https://api.zippopotam.us/IN/${zipCode}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid postal code or API request failed!");
        }
        return response.json();
      })
      .then((data) => {
        setLocationData(data);
      })
      .catch((error) => {
        setError(error.message);
        setLocationData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const clearLocationInfo = () => {
    setLocationData(null);
    setError(null);
  };
  return (
    <div className="  flex  h-screen justify-center items-center  bg-black">
      <div className="w-[600px] h-[400px] bg-green-300 rounded-lg flex flex-col gap-12 relative">
        <div className="font-bold text-2xl text-black mt-12  self-center  ">
          ZipCode Information
        </div>

        <div className="ml-20 flex flex-col gap-6 ">
          <PostalCode
            onZipCodeSubmit={fetchLocationInfo}
            clearLocationInfo={clearLocationInfo}
          />
          {loading ? <p>Loading...</p> : null}
          {error ? (
            <p className="text-red-500 font-semibold">Error: {error}</p>
          ) : null}
          <LocationInfo locationData={locationData} />
        </div>
      </div>
    </div>
  );
}
export default App;
