import React, { useState } from "react";
import "./Header.css";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";

const navItems = [
  {
    label: "Care Tyre",
    subMenu: ["MRF Tyres", "CEAT Tyres", "Goodyear Tyres", "Apollo Tyres"],
  },
  {
    label: "Bike Tyre",
    subMenu: ["MRF Tyres", "CEAT Tyres", "Goodyear Tyres", "Apollo Tyres"],
  },
  {
    label: "Tyre Pressure",
    subMenu: null,
  },
  {
    label: "Commercial Tyre",
    subMenu: null,
  },
  {
    label: "Accessories",
    subMenu: ["Batteries", "Alloys Wheels"],
  },
  {
    label: "More",
    subMenu: [
      "CashBack Offer",
      "Find Tyre Dealers",
      "Compare Tyres",
      "Are you a Tyre Dealer",
      "Wheel balancing",
      "Wheel Alignment",
    ],
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="d-flex align-items-center">
            <div className="menu-icon" onClick={toggleMenu}>
              {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </div>
            <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a
                    href="/"
                    className="text-uppercase font-weight-normal text-decoration-none"
                  >
                    {item.label} {item.subMenu && <MdKeyboardArrowDown />}
                    {item.subMenu && (
                      <ul className="subMenu">
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a href="/" className="text-decoration-none">
                              {subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
