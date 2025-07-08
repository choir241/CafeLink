import TravelLocationInput from "./components/TravelLocationInput";
import TravelDatesInput from "./components/TravelDatesInput";
import { useState } from "react";
import Button from "./components/Button";

export default function App() {
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
    to: ""
  });

  const locations = ["country", "city", "state"];

  function generateTravelResources(){
    console.log(departingFrom)
    console.log(stayingAt)
    console.log(dates)
  }

  return (
    <>
      <h2>Departing From</h2>
      {locations.map((location) => {
        return (
          <TravelLocationInput
            key={location}
            onChangeEventHandler={setDepartingFrom}
            location={location}
          />
        );
      })}

      <h2>Staying At</h2>
      {locations.map((location) => {
        return (
          <TravelLocationInput
            key={location}
            onChangeEventHandler={setStayingAt}
            location={location}
          />
        );
      })}

      <h2>Dates of Travel</h2>
      <span>From</span>
      <TravelDatesInput travelStatus={"from"} onChangeEventHandler={setDates} />
      <span>To</span>
      <TravelDatesInput travelStatus={"to"} onChangeEventHandler={setDates} />

      <Button label = {"Generate Travel Resources"} onButtonClick={generateTravelResources}/>
    </>
  );
}
