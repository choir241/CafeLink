import TravelLocationInput from "./TravelLocationInput";
import TravelDatesInput from "./TravelDatesInput";
import Button from "../Button";
import { type Dispatch, type SetStateAction } from "react";
import TravelCitySugggestions from "./TravelCitySuggestions";
import TravelCountrySugggestions from "./TravelCountrySuggestions";
import TravelStateSugggestions from "./TravelStateSuggestions";

interface IMockLocationData {
  country: string;
  city: string;
  state: string;
}

export interface ITravelLocationForm {
  departingFrom: IMockLocationData;
  stayingAt: IMockLocationData;
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
  function selectCountryDepartingFromSuggestion(country: string) {
    props.setDepartingFrom((prev) => ({ ...prev, country }));
  }

  function selectCityDepartingFromSuggestion(city: string) {
    props.setDepartingFrom((prev) => ({ ...prev, city }));
  }

  function selectStateDepartingFromSuggestion(state: string) {
    props.setDepartingFrom((prev) => ({ ...prev, state }));
  }

  return (
    <>
      <h2>Departing From</h2>

      <TravelLocationInput
        onChangeEventHandler={props.setDepartingFrom}
        location={"city"}
      />
      <TravelCitySugggestions
        selectCityDepartingFromSuggestion={selectCityDepartingFromSuggestion}
        departingFromCity={props.departingFrom.city}
      />

      <TravelLocationInput
        onChangeEventHandler={props.setDepartingFrom}
        location={"country"}
      />
      <TravelCountrySugggestions
        selectCountryDepartingFromSuggestion={
          selectCountryDepartingFromSuggestion
        }
        departingFromCountry={props.departingFrom.country}
      />

      <TravelLocationInput
        onChangeEventHandler={props.setDepartingFrom}
        location={"state"}
      />
      <TravelStateSugggestions
        selectStateDepartingFromSuggestion={selectStateDepartingFromSuggestion}
        departingFromState={props.departingFrom.state}
      />

      {/* <h2>Staying At</h2> */}
      {/* <TravelLocationInput
        onChangeEventHandler={props.setStayingAt}
        location={"city"}
      />
      <TravelCitySugggestions departingFromCity={props.stayingAt.city} />

      <TravelLocationInput
        onChangeEventHandler={props.setStayingAt}
        location={"country"}
      />
      <TravelCountrySugggestions
      selectCountryDepartingFromSuggestion={selectCountryDepartingFromSuggestion}
        departingFromCountry={props.stayingAt.country}
      />

      <TravelLocationInput
        onChangeEventHandler={props.setStayingAt}
        location={"state"}
      />
      <TravelStateSugggestions departingFromState={props.stayingAt.state} /> */}

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
