import TravelLocationInput from "../TravelInputs/TravelLocationInput";
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

      <TravelLocationInput
        locationData={props.departingFrom.city}
        onChangeEventHandler={props.selectDepartingFromSuggestion}
        location={"city"}
        prevDataFromOtherTravelInput={{location: "country", locationData: props.departingFrom.country}}
      />

      {/* <TravelLocationInput
        departingFrom={props.departingFrom}
        onChangeEventHandler={props.selectDepartingFromSuggestion}
        location={"country"}
        options={mockLocationData}
      /> */}

      <TravelLocationInput
        locationData={props.departingFrom.country}
        onChangeEventHandler={props.selectDepartingFromSuggestion}
        location={"country"}
        prevDataFromOtherTravelInput={{location: "city", locationData: props.departingFrom.city}}
      />
    </>
  );
}
