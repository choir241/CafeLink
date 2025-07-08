import { type Dispatch, type SetStateAction } from "react";

export default function TravelLocationInput({
  onChangeEventHandler,
  location,
}: {
  onChangeEventHandler: Dispatch<
      SetStateAction<{ country: string; city: string; state: string }>
    >
  location: string;
}) {
  return (
    <input
      type="text"
      placeholder={location}
      onChange={(e) =>
        onChangeEventHandler((prev) => ({
          ...prev,
          [location]: e.target.value,
        }))
      }
    />
  );
}
