// TestimonialsSlider.js

import React, { useState, useEffect } from "react";
import "./Testimonials.css"; // Import your CSS file for styling

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more testimonials as needed
];

const TestimonialsSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current testimonial index, and loop back to the first one if at the end
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 1) % testimonialsData.length
      );
    }, 7000); // Change the interval duration as needed

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="testimonials-slider">
      {testimonialsData.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`testimonial ${
            index === currentTestimonial ? "active" : ""
          }`}
        >
          <p>{testimonial.text}</p>
          <span className="author">{testimonial.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsSlider;
