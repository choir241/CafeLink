import { mockLocationData } from "../../static/mockLocationData";
import { useState, useEffect } from "react";
import { type IMockLocationData } from "./TravelCitySuggestions";

export default function TravelCountrySugggestions({
  departingFromCountry,
  selectCountryDepartingFromSuggestion
}: {
  departingFromCountry: string;
  selectCountryDepartingFromSuggestion: (e: string) => void
  }) {
  const [countries, setCountries] = useState<IMockLocationData[]>([]);

  useEffect(() => {
    const findCountries = mockLocationData.filter(
      (location: IMockLocationData) => {
        if (location.country && departingFromCountry) {
          return location.country
            .toLowerCase()
            .includes(departingFromCountry.toLowerCase());
        }
      }
    );
    const filterOutCountryDuplicates = [];
    const seenCountries = new Set();

    for (let i = 0; i < findCountries.length; i++) {
      const country = findCountries[i].country;
      if (!seenCountries.has(country)) {
        seenCountries.add(country);
        filterOutCountryDuplicates.push(findCountries[i]);
      }
    }

    setCountries(filterOutCountryDuplicates);
  }, [departingFromCountry]);

  return (
    <>
      {countries.map((location, index) => {
        return <div key={index} onClick = {()=>{selectCountryDepartingFromSuggestion(location.country)}}>{location.country}</div>;
      }).slice(0,10)}
    </>
  );
}
