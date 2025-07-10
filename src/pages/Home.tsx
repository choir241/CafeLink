import { useState } from "react";
import DepartingFromSection from "../components/TravelLocationForm/TravelForm/DepartingFromSection";
import StayingAtSection from "../components/TravelLocationForm/TravelForm/StayingAtSection";
import TravelDates from "../components/TravelLocationForm/TravelForm/TravelDates";
import Button from "../components/Button";
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

export default function Home() {
  const [stayingAt, setStayingAt] = useState({
    country: "",
    city: "",
    state: "",
  });
  const [departingFrom, setDepartingFrom] = useState({
    country: "",
    city: "",
    state: "",
  });

  const [dates, setDates] = useState({
    from: "",
    to: "",
  });

  function selectDepartingFromSuggestion(
    location: string,
    locationData: string,
  ) {
    setDepartingFrom((prev) => ({ ...prev, [location]: locationData }));
  }

  function selectStayingAtSuggestion(location: string, locationData: string) {
    setStayingAt((prev) => ({ ...prev, [location]: locationData }));
  }

  function selectDatesAtSuggestion(
    travelStatus: string,
    travelStatusData: string,
  ) {
    setDates((prev) => ({ ...prev, [travelStatus]: travelStatusData }));
  }

  function generateTravelResources() {
    console.log(dates);
    console.log(departingFrom);
    console.log(stayingAt);
    sessionStorage.setItem("departingFrom", JSON.stringify(departingFrom));
    sessionStorage.setItem("stayingAt", JSON.stringify(stayingAt));
    sessionStorage.setItem("dates", JSON.stringify(dates));
  }

  return (
    <>
      <DepartingFromSection
        props={{
          departingFrom,
          selectDepartingFromSuggestion,
        }}
      />

      <StayingAtSection
        props={{
          stayingAt,
          selectStayingAtSuggestion,
        }}
      />

      <TravelDates selectDatesAtSuggestion={selectDatesAtSuggestion} />

      <Button
        label={"Generate Travel Resources"}
        onButtonClick={generateTravelResources}
      />
    </>
  );
}
