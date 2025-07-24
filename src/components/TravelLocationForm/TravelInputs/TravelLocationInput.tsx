import { useState, useMemo } from "react";
import { filterOutDuplicates } from "../../../hooks/filterOutDuplicates";
import { findLocation } from "../../../hooks/findLocation";
import { mockLocationData } from "../../../static/mockLocationData";
import { type IMockLocationData } from "../../../pages/Home";

export default function TravelLocationInput({
  locationData,
  prevDataFromOtherTravelInput,
  onChangeEventHandler,
  location,
}: {
  locationData: string;
  prevDataFromOtherTravelInput: {
    location: "country" | "city" | "state";
    locationData: string;
  };
  onChangeEventHandler: ({
    location,
    locationData,
  }: {
    location: string;
    locationData: string;
  }) => void;
  location: "country" | "city" | "state";
}) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [filteredLocations, setFilteredLocations] = useState<
    IMockLocationData[]
  >(
    filterOutDuplicates({
      locationList: mockLocationData,
      location,
    }),
  );

  useMemo(() => {
    if (isVisible && locationData) {
      setFilteredLocations(
        filterOutDuplicates({
          locationList: findLocation({
            locationList: mockLocationData,
            locationData: locationData,
            location: location,
          }),
          location: location,
        }),
      );
    } else if (isVisible && prevDataFromOtherTravelInput.locationData) {
      setFilteredLocations(
        filterOutDuplicates({
          locationList: findLocation({
            locationList: mockLocationData,
            locationData: prevDataFromOtherTravelInput.locationData,
            location: prevDataFromOtherTravelInput.location,
          }),
          location: prevDataFromOtherTravelInput.location,
        }),
      );
    }
  }, [prevDataFromOtherTravelInput.locationData, locationData, isVisible]);

  return (
    <div>
      <input
        placeholder={location}
        onClick={() => setIsVisible(true)}
        value={locationData}
        type="text"
        onChange={(e) => {
          if (!e.target.value) {
            onChangeEventHandler({ location, locationData: "" });
            setFilteredLocations(
              filterOutDuplicates({
                locationList: mockLocationData,
                location,
              }),
            );
          }
          onChangeEventHandler({ location, locationData: e.target.value });
        }}
      />
      {isVisible
        ? filteredLocations
            .map((locationObj, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    onChangeEventHandler({
                      location,
                      locationData: locationObj[location]
                        ? locationObj[location]
                        : "",
                    });
                    setIsVisible(false);
                  }}
                >
                  {locationObj[location]}
                </div>
              );
            })
            .slice(0, 10)
        : ""}
    </div>
  );
}
