import TravelLocationInput from "./TravelLocationInput";
import TravelDatesInput from "./TravelDatesInput";
import Button from "../Button";
import { type Dispatch, type SetStateAction } from "react";

interface ITravelLocationForm {
  setDates: Dispatch<SetStateAction<{ from: string; to: string }>>;
  setDepartingFrom: Dispatch<
    SetStateAction<{ country: string; city: string; state: string }>
  >;
  setStayingAt: Dispatch<
    SetStateAction<{ country: string; city: string; state: string }>
  >;
  generateTravelResources: () => void;
}

export default function TravelLocationForm({
  props,
}: {
  props: ITravelLocationForm;
}) {
  const locations = ["country", "city", "state"];

  return (
    <>
      <h2>Departing From</h2>
      {locations.map((location) => {
        return (
          <TravelLocationInput
            key={location}
            onChangeEventHandler={props.setDepartingFrom}
            location={location}
          />
        );
      })}

      <h2>Staying At</h2>
      {locations.map((location) => {
        return (
          <TravelLocationInput
            key={location}
            onChangeEventHandler={props.setStayingAt}
            location={location}
          />
        );
      })}

      <h2>Dates of Travel</h2>
      <span>From</span>
      <TravelDatesInput
        travelStatus={"from"}
        onChangeEventHandler={props.setDates}
      />
      <span>To</span>
      <TravelDatesInput
        travelStatus={"to"}
        onChangeEventHandler={props.setDates}
      />

      <Button
        label={"Generate Travel Resources"}
        onButtonClick={props.generateTravelResources}
      />
    </>
  );
}
