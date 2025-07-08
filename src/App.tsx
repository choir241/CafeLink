// Landing page will be a. where are you staying
// where are you coming from
// -> b. will be just city, country
// can be signed in or guest

import TravelLocationInput from "./components/TextInput";
import { useState, useEffect } from "react";

export default function App() {
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

  useEffect(() => {
    console.log(departingFrom);
    console.log(stayingAt);
  }, [departingFrom, stayingAt]);

  return (
    <>
      <TravelLocationInput onChangeEventHandler={setDepartingFrom} location={"country"} />
      <TravelLocationInput onChangeEventHandler={setDepartingFrom} location={"city"} />
      <TravelLocationInput onChangeEventHandler={setDepartingFrom} location={"state"} />

      <TravelLocationInput onChangeEventHandler={setStayingAt} location={"country"} />
      <TravelLocationInput onChangeEventHandler={setStayingAt} location={"city"} />
      <TravelLocationInput onChangeEventHandler={setStayingAt} location={"state"} />
    </>
  );
}
