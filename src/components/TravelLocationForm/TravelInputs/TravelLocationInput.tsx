export default function TravelLocationInput({
  onChangeEventHandler,
  location,
  travelData
}: {
  onChangeEventHandler: (location: string, locationData: string) => void,
  location: string;
  travelData: string
}) {
  return (
    <input
      type="text"
      value={travelData}
      placeholder={location}
      onChange={(e) =>
      onChangeEventHandler(location, e.target.value)
      }
    />
  );
}
