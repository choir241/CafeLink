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
  stayingAt: IMockLocationData;
  selectStayingAtSuggestion: ({
    location,
    locationData,
  }: {
    location: string;
    locationData: string;
  }) => void;
}

export default function StayingAtSection({
  props,
}: {
  props: ITravelLocationForm;
}) {
  return (
    <>
      <h2>Staying At</h2>

      <section>
        <TravelLocationInput
          travelData={props.stayingAt.city}
          onChangeEventHandler={props.selectStayingAtSuggestion}
          location={"city"}
        />
        <TravelCitySugggestions
          selectLocationSuggestion={props.selectStayingAtSuggestion}
          city={props.stayingAt.city}
        />
      </section>

      <section>
        <TravelLocationInput
          travelData={props.stayingAt.country}
          onChangeEventHandler={props.selectStayingAtSuggestion}
          location={"country"}
        />
        <TravelCountrySugggestions
          selectLocationSuggestion={props.selectStayingAtSuggestion}
          country={props.stayingAt.country}
        />
      </section>

      <section>
        <TravelLocationInput
          travelData={props.stayingAt.state}
          onChangeEventHandler={props.selectStayingAtSuggestion}
          location={"state"}
        />

        <TravelStateSugggestions
          selectLocationSuggestion={props.selectStayingAtSuggestion}
          state={props.stayingAt.state}
        />
      </section>
    </>
  );
}
