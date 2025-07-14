import { type IMockLocationData } from "../../../pages/Home";
import { useState } from "react";

export default function TravelLocationInput({
  departingFrom,
  onChangeEventHandler,
  location,
  options,
}: {
  departingFrom: { country: string; city: string; state: string };
  onChangeEventHandler: ({
    location,
    locationData,
  }: {
    location: string;
    locationData: string;
  }) => void;
  location: "country" | "city" | "state";
  options: IMockLocationData[];
}) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="select-editable">
      <input
        onClick={() => setIsVisible(true)}
        value={departingFrom[location]}
        type="text"
        onChange={(e) =>
          onChangeEventHandler({ location, locationData: e.target.value })
        }
      />
      {isVisible || (isVisible && departingFrom[location])
        ? options
            .map((option) => {
              if (option[location]?.includes(departingFrom[location])) {
                return (
                  <div
                    onClick={() => {
                      onChangeEventHandler({
                        location,
                        locationData: option[location] ? option[location] : "",
                      });
                      setIsVisible(false);
                    }}
                  >
                    {option[location]}
                  </div>
                );
              }
            })
            .slice(0, 10)
        : ""}
    </div>
  );
}
