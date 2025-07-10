import { type IMockLocationData } from "../pages/Home";

export function filterOutDuplicates({
  locationList,
  location,
}: {
  locationList: IMockLocationData[];
  location: "country" | "city" | "state";
}) {
  const filteredDuplicates = [];
  const seenStates = new Set();

  for (let i = 0; i < locationList.length; i++) {
    const locationData = locationList[i][location];
    if (!seenStates.has(locationData)) {
      seenStates.add(locationData);
      filteredDuplicates.push(locationList[i]);
    }
  }

  return filteredDuplicates;
}
