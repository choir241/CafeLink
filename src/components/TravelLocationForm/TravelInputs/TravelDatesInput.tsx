export default function TravelDatesInput({
  onChangeEventHandler,
  travelStatus,
}: {
  onChangeEventHandler: ({
    travelStatus,
    travelStatusData,
  }: {
    travelStatus: string;
    travelStatusData: string;
  }) => void;
  travelStatus: string;
}) {
  return (
    <input
      type="date"
      onChange={(e) =>
        onChangeEventHandler({ travelStatus, travelStatusData: e.target.value })
      }
    />
  );
}
