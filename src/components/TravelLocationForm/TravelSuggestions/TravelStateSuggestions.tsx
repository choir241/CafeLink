import { mockLocationData } from "../../../static/mockLocationData";
import { useState, useEffect } from "react";
import { type IMockLocationData } from "../../../pages/Home";
import { filterOutDuplicates } from "../../../hooks/filterOutDuplicates";
import { findLocation } from "../../../hooks/findLocation";

export default function TravelStateSugggestions({
  state,
  selectLocationSuggestion,
}: {
  state: string;
  selectLocationSuggestion: ({
    location,
    locationData,
  }: {
    location: string;
    locationData: string;
  }) => void;
}) {
  const [states, setStates] = useState<IMockLocationData[]>([]);

  useEffect(() => {
    const findStates = findLocation({
      locationList: mockLocationData,
      location: "state",
      locationData: state,
    });

    const filteredList = filterOutDuplicates({
      locationList: findStates,
      location: "state",
    });

    setStates(filteredList);
  }, [state]);

  return (
    <>
      {states.map((location, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              location.state
                ? selectLocationSuggestion({
                    location: "state",
                    locationData: location.state,
                  })
                : "";
              setTimeout(() => {
                setStates([]);
              }, 50);
            }}
          >
            {location.state}
          </div>
        );
      })}
    </>
  );
}
