import { type IMockLocationData } from "../../../pages/Home";

export default function TravelLocationInput({
  onChangeEventHandler,
  location,
  options,
}: {
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
  return (
    <div className="select-editable">
      <select
        onChange={(e) =>
          onChangeEventHandler({ location, locationData: e.target.value })
        }
      >
        {options.map((option, index) => {
          return <option key={index}>{option[location]}</option>;
        })}
      </select>
      <input
        type="text"
        onChange={(e) =>
          onChangeEventHandler({ location, locationData: e.target.value })
        }
      />
    </div>
  );
}
