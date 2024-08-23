import React from "react";
import "./TireCard.css"; // Import custom CSS

const TireCard = () => {
  const tireData = [
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "165/70 R13",
      reviews: 320,
      rating: 4,
      price: "₹4,013",
      warranty: "5 Year Warranty",
      offer: "Offer available",
      type: "Tubeless",
      image:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60", // Placeholder for the tire image
    },
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "165/70 R13",
      reviews: 320,
      rating: 4,
      price: "₹4,013",
      warranty: "5 Year Warranty",
      offer: "Offer available",
      type: "Tubeless",
      image:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60", // Placeholder for the tire image
    },
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "165/70 R13",
      reviews: 320,
      rating: 4,
      price: "₹4,013",
      warranty: "5 Year Warranty",
      offer: "Offer available",
      type: "Tubeless",
      image:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60", // Placeholder for the tire image
    },
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "165/70 R13",
      reviews: 320,
      rating: 4,
      price: "₹4,013",
      warranty: "5 Year Warranty",
      offer: "Offer available",
      type: "Tubeless",
      image:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60", // Placeholder for the tire image
    },
  ];

  return (
    <div className="tire-section">
      <h2 className="services-heading"> Tyres sold by this Dealer</h2>
      <div className="d-flex gap-4 pt-3 mb-5 tire-mob">
        {tireData.map((item, index) => (
          <div className="tire-card border rounded shadow-sm p-3" key={index}>
            {/* Warranty Badge */}
            <div className="warranty-badge badge bg-warning text-dark">
              {item.warranty}
            </div>

            {/* Brand Logo */}
            <div className="brand-logo mb-2">
              <img
                src="data:image/png;base64,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" // Placeholder for brand logo
                alt={item.brand}
                className="img-fluid"
                style={{ height: "30px" }}
              />
            </div>

            {/* Tire Information */}
            <h5 className="tire-model">{item.model}</h5>
            <p className="tire-size mb-2">{item.size}</p>

            {/* Rating and Reviews */}
            <div className="d-flex align-items-center mb-2">
              <div className="rating badge bg-success me-2">{item.rating}</div>
              <span className="reviews">{item.reviews} Reviews</span>
            </div>

            {/* Price */}
            <h4 className="tire-price text-primary">{item.price}</h4>

            {/* Offer */}
            <p className="text-success mb-1">{item.offer}</p>

            {/* Tire Type */}
            <p className="text-muted">{item.type}</p>

            {/* Tire Image */}
            <div className="tire-image">
              <img
                src={item.image} // Placeholder for tire image
                alt={item.model}
                className="img-fluid"
                style={{ maxHeight: "100px", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TireCard;
