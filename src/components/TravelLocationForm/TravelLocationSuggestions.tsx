import { mockLocationData } from "../../static/mockLocationData";
import { useState, useEffect } from "react";

interface ITravelLocationInfo {
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

interface IMockLocationData {
  country: string;
  city: string | null;
  state: string | null;
}

export default function TravelLocationSuggestions({
  props,
}: {
  props: ITravelLocationInfo;
}) {
  const [countries, setCountries] = useState<IMockLocationData[]>([]);
  const [states, setStates] = useState<IMockLocationData[]>([]);

  useEffect(() => {


    const findCountries = mockLocationData.filter((location) =>
      location.country && props.departingFrom.country
        ? location.country
            .toLowerCase()
            .includes(props.departingFrom.country.toLowerCase())
        : ""
    );

    const filterOutCountriesDuplicates = [];
    const seenCountries = new Set();

    for (let i = 0; i < findCountries.length; i++) {
      const country = findCountries[i].country;
      if (!seenCountries.has(country)) {
        seenCountries.add(country);
        filterOutCountriesDuplicates.push(findCountries[i]);
      }
    }

    setCountries(filterOutCountriesDuplicates);

    const findStates = mockLocationData.filter((location) =>
      location.state && props.departingFrom.state
        ? location.state
            .toLowerCase()
            .includes(props.departingFrom.state.toLowerCase())
        : ""
    );

    const filterOutStatesDuplicates = [];
    const seenStates = new Set();

    for (let i = 0; i < findStates.length; i++) {
      const state = findStates[i].state;
      if (!seenStates.has(state)) {
        seenStates.add(state);
        filterOutStatesDuplicates.push(findStates[i]);
      }
    }

    setStates(filterOutStatesDuplicates);
  }, [
    props.departingFrom.country,
    props.departingFrom.state,
  ]);

  return (
    <>


        {countries.map((location, index) => {
        return <div key={index}>{location.country}</div>;
      })}

      
        {states.map((location, index) => {
        return <div key={index}>{location.country}</div>;
      })}
    </>
  );
}
