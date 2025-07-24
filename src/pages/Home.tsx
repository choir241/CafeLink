import { useState } from "react";
import DepartingFromSection from "../components/TravelLocationForm/TravelForm/DepartingFromSection";
import StayingAtSection from "../components/TravelLocationForm/TravelForm/StayingAtSection";
import TravelDates from "../components/TravelLocationForm/TravelForm/TravelDates";
import Button from "../components/Button";
import { hotels } from "../static/mockHotelData";
import { tours } from "../static/mockTourData";

export interface ITourData {
  name: string;
  type: string;
  category: string;
  address: string;
  cost: number;
  currency: string;
  website: string | null;
  opening_hours: string;
  contact: string;
  rating: number;
  city: string;
  country: string;
}
export interface ITravelLocationInfo {
  stayingAt: {
    country: string;
    city: string;
    state: string;
  };
  departingFrom: {
    country: string;
    city: string;
    state: string;
  };
  dates: {
    from: string;
    to: string;
  };
}

export interface IMockLocationData {
  country: string;
  city: string;
  state: string | null;
}

export interface IHotelData {
  hotel: string;
  address: string;
  nearby_airport: string;
  airport_address: string;
  transportation_options: {
    type: string;
    cost: number;
    currency: string;
  }[];
}

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

  const [hotelData, setHotelData] = useState<IHotelData[]>([]);
  const [tourData, setTourData] = useState<ITourData[]>([]);

  function selectDepartingFromSuggestion({
    location,
    locationData,
  }: {
    location: string;
    locationData: string;
  }) {
    setDepartingFrom((prev) => ({ ...prev, [location]: locationData }));
  }

  function selectStayingAtSuggestion({
    location,
    locationData,
  }: {
    location: string;
    locationData: string;
  }) {
    setStayingAt((prev) => ({ ...prev, [location]: locationData }));
  }

  function selectDatesAtSuggestion({
    travelStatus,
    travelStatusData,
  }: {
    travelStatus: string;
    travelStatusData: string;
  }) {
    setDates((prev) => ({ ...prev, [travelStatus]: travelStatusData }));
  }

  function generateTravelResources() {
    sessionStorage.setItem("dates", JSON.stringify(dates));
    sessionStorage.setItem("departingFrom", JSON.stringify(departingFrom));
    sessionStorage.setItem("stayingAt", JSON.stringify(stayingAt));

    if (new Date(dates.from) > new Date(dates.to)) {
      throw new Error("From date should be greater than To date");
    }

    const stayingAtHotelData = hotels.filter((hotel) => {
      if (
        hotel.address.includes(stayingAt.city) &&
        hotel.address.includes(stayingAt.country)
      ) {
        return hotel;
      }
    });

        const departingFromHotelData = hotels.filter((hotel) => {
      if (
        hotel.address.includes(departingFrom.city) &&
        hotel.address.includes(departingFrom.country)
      ) {
        return hotel;
      }
    });

    setHotelData([...stayingAtHotelData, ...departingFromHotelData]);

    const stayingAtTourData = tours.filter((tour) => {
      if (
        tour.address.includes(stayingAt.city) &&
        tour.address.includes(stayingAt.country)
      ) {
        return tour;
      }
    });

    const departingFromTourData = tours.filter((tour)=>{
      if (
        tour.address.includes(departingFrom.city) &&
        tour.address.includes(departingFrom.country)
      ) {
        return tour;
      }
    })

    setTourData([...departingFromTourData, ...stayingAtTourData]);
  }

  return (
    <>
    <section>
      <DepartingFromSection
        props={{
          departingFrom,
          selectDepartingFromSuggestion,
        }}
      />

      <StayingAtSection
        props={{
          stayingAt,
          selectStayingAtSuggestion,
        }}
      />

      <TravelDates selectDatesAtSuggestion={selectDatesAtSuggestion} />

      <Button
        label={"Generate Travel Resources"}
        onButtonClick={generateTravelResources}
      />
    </section>
    <section>
      {tourData.map((tour, index)=>{
        return(
          <div key = {index}>
            {tour.name}
          </div>
        )
      })}

      {hotelData.map((hotel, index)=>{
        return(
          <div key = {index}>
            {hotel.hotel}
          </div>
        )
      })}
    </section>
    </>
  );
}
