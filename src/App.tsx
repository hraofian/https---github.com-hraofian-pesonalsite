import Band from "./components/band/band";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ImageMap from "./components/imageMap/ImageMap";
import Navbar from "./components/navbar/Navbar";
import SlideShow from "./components/slideShow/slideShow";
import TicketModal from "./components/ticketModal/TicketModal";
import Tour from "./components/tour/Tour";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <SlideShow />
      <Band />
      <Tour />
      <TicketModal />
      <Contact />
      <ImageMap/>
      <Footer/>
    </>
  );
}

export default App;
