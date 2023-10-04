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
      <h2>Our Services</h2>
      <div className="service-cards">
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
      </div>
    </div>
  );
};

export default ServiceSection;
