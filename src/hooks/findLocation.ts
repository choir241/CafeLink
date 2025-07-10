import { type IMockLocationData } from "../pages/Home";

export function findLocation({locationList, location, locationData}:{locationList: IMockLocationData[], location: "city" | "country" | "state", locationData: string}) {
  return locationList.filter((locationElement: IMockLocationData) => {
    if (locationElement[location] && locationData) {
      return locationElement[location].toLowerCase().includes(locationData.toLowerCase());
    }
  });
}
