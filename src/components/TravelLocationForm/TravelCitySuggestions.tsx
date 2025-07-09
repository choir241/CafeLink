import { mockLocationData } from "../../static/mockLocationData";
import { useState, useMemo } from "react";

export interface ITravelLocationInfo {
  stayingAt: {
    country: string;
    city: string;
    state: string;
  };
  departingFrom: {
    country: string;
    city: string;
    state: string;
  };
  dates: {
    from: string;
    to: string;
  };
}

export interface IMockLocationData {
  country: string;
  city: string | null;
  state: string | null;
}

export default function TravelCitySugggestions({
  departingFromCity,
  selectCityDepartingFromSuggestion,
}: {
  departingFromCity: string;
  selectCityDepartingFromSuggestion: (e: string) => void;
}) {
  const [cities, setCities] = useState<IMockLocationData[]>([]);

  useMemo(() => {
    const findCities = mockLocationData.filter(
      (location: IMockLocationData) => {
        if (location.city && departingFromCity) {
          return location.city
            .toLowerCase()
            .includes(departingFromCity.toLowerCase());
        }
      }
    );
    const filterOutCityDuplicates = [];
    const seenCities = new Set();

    for (let i = 0; i < findCities.length; i++) {
      const city = findCities[i].city;
      if (!seenCities.has(city)) {
        seenCities.add(city);
        filterOutCityDuplicates.push(findCities[i]);
      }
    }

    setCities(filterOutCityDuplicates);
  }, [departingFromCity]);

  return (
    <>
      {cities
        .map((location, index) => {
          return <div onClick = {()=> 
            {
              location.city ? selectCityDepartingFromSuggestion(location.city) : ""
              setCities([])
            }} key={index}>{location.city}</div>;
        })
        .slice(0, 10)}
    </>
  );
}
