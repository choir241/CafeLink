// import TravelLocationInput from "../TravelInputs/TravelLocationInput";
// import { mockLocationData } from "../../../static/mockLocationData";

// interface IMockLocationData {
//   country: string;
//   city: string;
//   state: string;
// }

// export interface ITravelLocationForm {
//   stayingAt: IMockLocationData;
//   selectStayingAtSuggestion: ({
//     location,
//     locationData,
//   }: {
//     location: string;
//     locationData: string;
//   }) => void;
// }

// export default function StayingAtSection({
//   props,
// }: {
//   props: ITravelLocationForm;
// }) {
//   return (
//       <>
//         <h2>Departing From</h2>
  
//         <section>
//           <TravelLocationInput
//             departingFrom={props.stayingAt}
//             onChangeEventHandler={props.selectStayingAtSuggestion}
//             location={"city"}
//             options={mockLocationData}
//           />
//         </section>
//       </>
//   );
// }
