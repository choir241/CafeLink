import TravelLocationInput from "../TravelInputs/TravelLocationInput";
import TravelCitySugggestions from "../TravelSuggestions/TravelCitySuggestions";
import TravelCountrySugggestions from "../TravelSuggestions/TravelCountrySuggestions";
import TravelStateSugggestions from "../TravelSuggestions/TravelStateSuggestions";
import { mockLocationData } from "../../../static/mockLocationData";

interface IMockLocationData {
  country: string;
  city: string;
  state: string;
}

export interface ITravelLocationForm {
  departingFrom: IMockLocationData;
  selectDepartingFromSuggestion: ({
    location,
    locationData,
  }: {
    location: string;
    locationData: string;
  }) => void;
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
          departingFrom={props.departingFrom}
          onChangeEventHandler={props.selectDepartingFromSuggestion}
          location={"city"}
          options={mockLocationData}
        />
        {/* <TravelCitySugggestions
          selectLocationSuggestion={props.selectDepartingFromSuggestion}
          city={props.departingFrom.city}
        /> */}
      </section>
    </>
  );
}
