import React from "react";
import "./Services.css"; // Add any custom CSS if needed

const DealerServices = () => {
  const servicesOffered = [
    { name: "Wheel Alignment", icon: "🛠️", description: "Precise wheel alignment services." },
    { name: "Tire Installation", icon: "🔧", description: "Expert tire installation for all vehicles." },
    { name: "Brake Inspection", icon: "🚗", description: "Comprehensive brake system inspections." },
    { name: "Tire Rotation", icon: "🔄", description: "Enhance tire longevity with rotation services." },
    { name: "Battery Check", icon: "🔋", description: "Ensure your battery is in top condition." },
  ];

  return (
    <section className="services-section py-4">
      <div className="">
        <h2 className="services-heading mb-4">Services Offered</h2>
        <div className="row">
          {servicesOffered.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="service-card p-3 border shadow-sm h-100">
                {/* Icon and text container */}
                <div className="d-flex align-items-start">
                  <span className="service-icon me-3" style={{ fontSize: "2rem" }}>
                    {service.icon}
                  </span>
                  <div>
                    <h5 className="service-name">{service.name}</h5>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealerServices;
    