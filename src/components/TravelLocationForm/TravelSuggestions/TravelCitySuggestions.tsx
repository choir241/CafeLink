import { filterOutDuplicates } from "../../../hooks/filterOutDuplicates";
import { mockLocationData } from "../../../static/mockLocationData";
import { useState, useMemo } from "react";
import { findLocation } from "../../../hooks/findLocation";
import { type IMockLocationData } from "../../../pages/Home";

export default function TravelCitySugggestions({
  city,
  selectLocationSuggestion,
}: {
  city: string;
  selectLocationSuggestion: ({
    location,
    locationData,
  }: {
    location: string;
    locationData: string;
  }) => void;
}) {
  const [cities, setCities] = useState<IMockLocationData[]>([]);

  useMemo(() => {
    const findCities = findLocation({
      locationList: mockLocationData,
      location: "city",
      locationData: city,
    });

    const filteredList = filterOutDuplicates({
      locationList: findCities,
      location: "city",
    });

    setCities(filteredList);
  }, [city]);

  return (
    <>
      {cities
        .map((location, index) => {
          return (
            <div
              onClick={() => {
                location.city
                  ? selectLocationSuggestion({
                      location: "city",
                      locationData: location.city,
                    })
                  : "";
                setTimeout(() => {
                  setCities([]);
                }, 50);
              }}
              key={index}
            >
              {location.city}
            </div>
          );
        })
        .slice(0, 10)}
    </>
  );
}
