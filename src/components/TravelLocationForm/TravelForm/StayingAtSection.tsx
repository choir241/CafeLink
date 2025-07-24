import TravelLocationInput from "../TravelInputs/TravelLocationInput";
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

      <TravelLocationInput
        locationData={props.stayingAt.city}
        onChangeEventHandler={props.selectStayingAtSuggestion}
        location={"city"}
        prevDataFromOtherTravelInput={{
          location: "country",
          locationData: props.stayingAt.country,
        }}
      />

      <TravelLocationInput
        locationData={props.stayingAt.country}
        onChangeEventHandler={props.selectStayingAtSuggestion}
        location={"country"}
        prevDataFromOtherTravelInput={{
          location: "city",
          locationData: props.stayingAt.city,
        }}
      />

      {props.stayingAt.country.toLowerCase() === "usa" ? (
        <TravelLocationInput
          onChangeEventHandler={props.selectStayingAtSuggestion}
          location={"state"}
          locationData={props.stayingAt.state}
          prevDataFromOtherTravelInput={{
            location: "country",
            locationData: props.stayingAt.country,
          }}
        />
      ) : (
        ""
      )}
    </>
  );
}
