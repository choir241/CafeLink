export default function TravelLocationInput({
  onChangeEventHandler,
  location,
}: {
  onChangeEventHandler: (location: string, locationData: string) => void,
  location: string;
}) {
  return (
    <input
      type="text"
      placeholder={location}
      onChange={(e) =>
      onChangeEventHandler(location, e.target.value)
      }
    />
  );
}
