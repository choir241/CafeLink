import { mockLocationData } from "../../static/mockLocationData";
import { useState, useEffect } from "react";
import { type IMockLocationData } from "./TravelCitySuggestions";

export default function TravelStateSugggestions({
  departingFromState,
   selectStateDepartingFromSuggestion
}: {
  departingFromState: string;
   selectStateDepartingFromSuggestion: (e:string) => void
}) {
  const [states, setStates] = useState<IMockLocationData[]>([]);

  useEffect(() => {
    const findStates = mockLocationData.filter(
      (location: IMockLocationData) => {
        if (location.state && departingFromState) {
          return location.state
            .toLowerCase()
            .includes(departingFromState.toLowerCase());
        }
      }
    );
    const filterOutStateDuplicates = [];
    const seenStates = new Set();

    for (let i = 0; i < findStates.length; i++) {
      const state = findStates[i].state;
      if (!seenStates.has(state)) {
        seenStates.add(state);
        filterOutStateDuplicates.push(findStates[i]);
      }
    }

    setStates(filterOutStateDuplicates);
  }, [departingFromState]);

  return (
    <>
      {states.map((location, index) => {
        return <div key={index} onClick = {()=>location.state ? selectStateDepartingFromSuggestion(location.state) : ""}>{location.state}</div>;
      })}
    </>
  );
}
