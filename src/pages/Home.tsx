import TravelLocationForm from "../components/TravelLocationForm/TravelLocationForm";
import { useState } from "react";

export default function Home() {
  const [stayingAt, setStayingAt] = useState({
    country: "",
    city: "",
    state: "",
  });
  const [departingFrom, setDepartingFrom] = useState({
    country: "",
    city: "",
    state: "",
  });

  const [dates, setDates] = useState({
    from: "",
    to: "",
  });

  function generateTravelResources() {
    console.log("test");
  }

  return (
    <>
      <TravelLocationForm
        props={{
          setDates,
          setDepartingFrom,
          setStayingAt,
          generateTravelResources,
        }}
      />
    </>
  );
}
