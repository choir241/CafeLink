import { mockLocationData } from "../../../static/mockLocationData";
import { useState, useEffect } from "react";
import { type IMockLocationData } from "../../../pages/Home";
import { filterOutDuplicates } from "../../../hooks/filterOutDuplicates";
import { findLocation } from "../../../hooks/findLocation";

export default function TravelCountrySugggestions({
  country,
  selectLocationSuggestion,
}: {
  country: string;
  selectLocationSuggestion: (location: string, locationData: string) => void;
}) {
  const [countries, setCountries] = useState<IMockLocationData[]>([]);

  useEffect(() => {
    const findCountries = findLocation({
      locationList: mockLocationData,
      location: "country",
      locationData: country,
    });

    const filteredList = filterOutDuplicates({
      locationList: findCountries,
      location: "country",
    });

    setCountries(filteredList);
  }, [country]);

  return (
    <>
      {countries
        .map((location, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                selectLocationSuggestion("country", location.country);
                setTimeout(() => {
                  setCountries([]);
                }, 50);
              }}
            >
              {location.country}
            </div>
          );
        })
        .slice(0, 10)}
    </>
  );
}
