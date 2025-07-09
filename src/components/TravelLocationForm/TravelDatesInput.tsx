import { type Dispatch, type SetStateAction } from "react";

export default function TravelDatesInput({
  onChangeEventHandler,
  travelStatus
}: {
  onChangeEventHandler: Dispatch<
      SetStateAction<{ from: string, to: string }>
    >;
  travelStatus: string
}) {
  return (
    <input type="date" onChange={(e) => onChangeEventHandler((prev) => ({
        ...prev,
        [travelStatus]: e.target.value
    }))} />
  );
}
