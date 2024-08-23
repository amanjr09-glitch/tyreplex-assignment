import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Deals.css";

const brands = [
  { className: "brand-mrf" },
  { className: "brand-ceat" },
  { className: "brand-goodyear" },
  { className: "brand-apollo" },
  { className: "brand-bridgestone" },
  { className: "brand-jk" },
  { className: "brand-michelin" },
  { className: "brand-pirelli" },
  { className: "brand-yokohama" },
  { className: "brand-tvs" },
  { className: "brand-continental" },
  { className: "brand-hankook" },
  { className: "brand-ralco" },
  { className: "brand-maxxis" },
  { className: "brand-metro" },
  { className: "brand-firestone" },
  { className: "brand-falken" },
  { className: "brand-ralson" },
  { className: "brand-ultramile" },
  { className: "brand-birla" },
  { className: "brand-kenda" },
  { className: "brand-metzeler" },
  { className: "brand-kumho" },
  { className: "brand-nexen" },
  { className: "brand-vredestein" },
  { className: "brand-mrl" },
  { className: "brand-maruti" },
  { className: "brand-linglong" },
  { className: "brand-mirage" },
  { className: "brand-duraturn" },
  { className: "brand-dunlop" },
  { className: "brand-jinyu" },
  { className: "brand-sailun" },
  { className: "brand-landsail" },
  { className: "brand-bedrock" },
  { className: "brand-kelly" },
  { className: "brand-vk" },
];

const DealItem = ({ idx, className }) => (
  <li className="dealItem" key={idx}>
    <a href="/">
      <div className="brandImg">
        <span className={`brandLogo ${className}`}></span>
      </div>
      <div className="card-title text-muted">{name}</div>
    </a>
  </li>
);

const Deals = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };
  const CustomLeftArrow = () => (
    <div className="custom-arrow custom-arrow--left">
      <svg /* SVG content */></svg>
    </div>
  );

  const CustomRightArrow = () => (
    <div className="custom-arrow custom-arrow--right">
      <svg /* SVG content */></svg>
    </div>
  );

  return (
    <div className="dealsIn">
      <Carousel
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        autoPlay
        autoPlaySpeed={1000}
        responsive={responsive}
        infinite
      >
        {brands.map((brand) => (
          <DealItem
            name={brand.name}
            className={brand.className}
            key={brand.name}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Deals;
