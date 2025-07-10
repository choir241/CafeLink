import TravelLocationInput from "../TravelInputs/TravelLocationInput";
import TravelCitySugggestions from "../TravelSuggestions/TravelCitySuggestions";
import TravelCountrySugggestions from "../TravelSuggestions/TravelCountrySuggestions";
import TravelStateSugggestions from "../TravelSuggestions/TravelStateSuggestions";

interface IMockLocationData {
  country: string;
  city: string;
  state: string;
}

export interface ITravelLocationForm {
  departingFrom: IMockLocationData;
  selectDepartingFromSuggestion: (
    location: string,
    locationData: string,
  ) => void;
}

export default function DepartingFromSection({
  props,
}: {
  props: ITravelLocationForm;
}) {
  return (
    <>
      <h2>Departing From</h2>

      <section>
        <TravelLocationInput
          onChangeEventHandler={props.selectDepartingFromSuggestion}
          location={"city"}
          travelData={props.departingFrom.city}
        />
        <TravelCitySugggestions
          selectLocationSuggestion={props.selectDepartingFromSuggestion}
          city={props.departingFrom.city}
        />
      </section>

      <section>
        <TravelLocationInput
          onChangeEventHandler={props.selectDepartingFromSuggestion}
          location={"country"}
          travelData={props.departingFrom.country}
        />
        <TravelCountrySugggestions
          selectLocationSuggestion={props.selectDepartingFromSuggestion}
          country={props.departingFrom.country}
        />
      </section>

      <section>
        <TravelLocationInput
          onChangeEventHandler={props.selectDepartingFromSuggestion}
          location={"state"}
          travelData={props.departingFrom.state}
        />

        <TravelStateSugggestions
          selectLocationSuggestion={props.selectDepartingFromSuggestion}
          state={props.departingFrom.state}
        />
      </section>
    </>
  );
}
