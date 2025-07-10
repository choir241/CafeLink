export default function TravelDatesInput({
  onChangeEventHandler,
  travelStatus
}: {
  onChangeEventHandler: (travelStatus: string, travelStatusData: string) => void,
  travelStatus: string
}) {
  return (
    <input type="date" onChange={(e) => onChangeEventHandler(travelStatus, e.target.value)} />
  );
}
