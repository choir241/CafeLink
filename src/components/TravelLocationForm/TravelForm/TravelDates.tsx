import TravelDatesInput from "../TravelInputs/TravelDatesInput";

export default function TravelDates({
  selectDatesAtSuggestion,
}: {
  selectDatesAtSuggestion: ({
    travelStatus,
    travelStatusData,
  }: {
    travelStatus: string;
    travelStatusData: string;
  }) => void;
}) {
  return (
    <>
      <h2>Dates of Travel</h2>
      <span>From</span>
      <TravelDatesInput
        travelStatus={"from"}
        onChangeEventHandler={selectDatesAtSuggestion}
      />
      <span>To</span>
      <TravelDatesInput
        travelStatus={"to"}
        onChangeEventHandler={selectDatesAtSuggestion}
      />
    </>
  );
}
