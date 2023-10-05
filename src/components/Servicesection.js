// ServiceSection.js

import React from "react";
import "./ServiceSection.css";

const ServiceSection = () => {
  const services = [
    {
      title: "Ayurvedic Consultation",
      description: "Personalized consultations based on Ayurvedic principles.",
      image: "consultation.jpg", // Replace with the actual image file
    },
    {
      title: "Herbal Medicine",
      description: "Prescription and preparation of herbal medicines.",
      image: "herbal-medicine.jpg",
    },
    {
      title: "Therapeutic Massage",
      description: "Relaxing and healing Ayurvedic massages.",
      image: "therapeutic-massage.jpg",
    },
    // Add more services as needed
  ];

  return (
    <div className="service-section">
      <h2>OUR SERVICES</h2>
      {/*<div className="service-cards">
        {services.map((service, index) => (
          <div
            className={`service-card ${index % 2 === 0 ? "even" : "odd"}`}
            key={index}
          >
            <img src={service.image} alt={service.title} />
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
        </div>*/}
      <div className="servicesbox">
        <div className="box1">
          <div className="txt1">
          AYURVEDIC CONSULTATION
          </div>
          <div className="txt2">
          Unlock the ancient wisdom of Ayurveda with our
          Personalized consultations. Experience holistic 
          healing for mind, body and spirit.
          </div>
        </div>
        <div className="box2">
          <div className="txt1">
          MEDICAL ASTROLOGY
          </div>
          <div className="txt2">
          Explore the profound insights of Medical Astrology
a time-honored practice blending celestial influences
with health and well-being
          </div>
        </div>
        <div className="box3">
          <div className="txt1">
         PANCHAKARMA
          </div>
          <div className="txt2">
          Revitalize your being with Panchakarma, an ancient
Ayurvedic detoxification and rejuvenation therapy.
Experience profound cleansing and restoration for
a harmonized mind, body, and spirit.
          </div>
        </div>
      </div>
      <button className="allservices">
        ALL SERVICES
      </button>
    </div>
  );
};

export default ServiceSection;
