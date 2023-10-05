import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/Servicesection";
import TestimonialsSlider from "./components/Testimonials";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock,faCalendar } from '@fortawesome/free-solid-svg-icons';
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// React v18
//Before react v18
// React.render(<App />);

//   <ul>
//     <li>1] Ensure the App is running!</li>
//   </ul>;
//   );

// function App() {
//   return (
//     <div className="container">
//       {/* <h1>Hello React!</h1> */}
//       <Header />
//       <MainSection />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
//   return (
//     <header className="header">
//       <h1>Fast React Pizza Co.</h1>
//     </header>
//   );
// }

// function MainSection() {
//   return (
//     <main className="main-section">
//       {/* <h2>Our Menu</h2> */}
//       <img src="pizzas/ayurveda-graphic.jpg" alt="Ayurveda Representation" />
//       <Pizza />
//     </main>
//   );
// }

// function Pizza() {
//   return (
//     <div>
//       <img src="pizzas/margherita.jpg" alt="pizza" />
//       <h3>Pizza Margherita</h3>
//       <h5>Tomato and mozarella</h5>
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <footer className="footer">
//       {new Date().toLocaleTimeString()}. We are currently serving!
//     </footer>
//   );
// }

function App() {
  return (
    <div>
      <Navbar />
      <Mainsection />
      <Workingbar/>
      <ServiceSection />
      <TestimonialsSlider />
    </div>
  );
}

// function Navbar() {
//   // return (

//   // );
// }

function Mainsection() {
  return (
    <div className="imagesofslider">
      {/* <h6 className="alias">T</h6> */}
      <div className="sliderimages">
      <img
        src="pizzas/front page.jpg"
        alt="Ayurveda Representation"
        className="image"
      />
      <div className="text-overlay">
        <h1 className="Main-Name">Samiksha Clinic</h1>
        <p className="intermediate">by</p>
        <p className="doctor-name">Dr. Meena Chavan</p>
        <p className="ayurveda">An Ayurvedic Consultant</p>
      </div>
      <div>

      </div>
      </div>
      </div>
      
    
  );
}
function Workingbar(){
  return(
    <div className="workinghrs">

      <div className="hours">
        <div className="icontime">
        <FontAwesomeIcon icon={faClock} />
        </div>

        <div className="cont3">
        <p className="text-workhr">WORKING HOURS <br/></p>
        <div className="times">
          <div className="left-days">
          <p className="days">
              Monday-Friday <br/>
              Saturday<br/>
              Sunday
          </p>
          </div>
          <div className="righttime">
            <p className="time">
              10:00am to 6:30pm <br/>
              10:00am to 2:30pm <br/>
              Closed
            </p>
          </div>
        </div>
      </div>
      </div>


      <div className="appointment">
        <div className="iconcal">
        <FontAwesomeIcon icon={faCalendar} />
        </div>
        <div>
          <p className="text-workhr">APPOINTMENT</p>
          <div className="availapp">
            <p className="apppara">
              Appointments are available,call us  <br/>
              today or book an appointment <br/>
            </p>
          </div>
          <div className="btncontact">
              <button className="btncont">CONTACT US</button>
          </div>
        </div>
      </div>
    </div>
  );
}
/*<div className="text-overlay">
        <h1 className="Main-Name">Samiksha Clinic</h1>
        <p className="intermediate">by</p>
        <p className="doctor-name">Dr. Meena Chavan</p>
      </div>*/