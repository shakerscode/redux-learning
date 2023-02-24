import logo from "./logo.svg";
import "./index.css";
import Header from "./components/Header";
import Booking from "./components/Booking";
import BookingResult from "./components/BookingResult";

function App() {
  return (
    <>
      <Header /> 
      <section>
        {/* <!-- Input Data --> */}
        <Booking /> 
        {/* <!-- Preview Data --> */}
        <BookingResult />
      </section>
    </>
  );
}

export default App;
