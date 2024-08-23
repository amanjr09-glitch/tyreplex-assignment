import React from "react";
import {
  MdAccessTime,
  MdAccountBalance,
  MdCreditCard,
  MdLocationPin,
  MdOutlineAccountBalanceWallet,
  MdOutlineSend,
  MdOutlineStarPurple500,
  MdOutlineVerified,
} from "react-icons/md";
import Slider from "../Slider";
import "./Hero.css";

const PaymentModes = () => (
  <div className="paymentModes mt-3">
    <h6 className="text-start">Payment Mode</h6>
    <div className="d-flex flex-wrap gap-3 align-items-center">
      <PaymentMode icon={<MdAccountBalance />} text="Deposit to Account" />
      <PaymentMode
        icon={<MdOutlineAccountBalanceWallet />}
        text="Net Banking"
      />
      <PaymentMode icon={<MdCreditCard />} text="Credit Card/Debit Card" />
      <PaymentMode icon={<MdOutlineSend />} text="UPI" />
      <PaymentMode icon={<MdOutlineAccountBalanceWallet />} text="Wallets" />
    </div>
  </div>
);

const PaymentMode = ({ icon, text }) => (
  <div className="d-flex align-items-center gap-2">
    <span>{icon}</span>
    <span>{text}</span>
  </div>
);


const DealerDetail = () => (
  <div className="dealerDetail">
    <div className="d-flex justify-content-between align-items-center">
      <h1>Shree Hemkunt Tyres and Services</h1>
      <span className="verified">
        <MdOutlineVerified /> Verified
      </span>
    </div>
    <div className="mt-2 d-flex gap-2 justify-content-between align-items-center">
      <div className="userRatings d-flex gap-2 align-items-center">
        <span className="rating">4.9</span>
        <div className="ratingStars d-flex align-items-center">
          {[...Array(5)].map((_, i) => (
            <MdOutlineStarPurple500 key={i} />
          ))}
        </div>
        <span className="totalRating">2278 Reviews</span>
        <a href="/" className="rateBtn">
          Rate
        </a>
      </div>
    </div>
    <DetailItem
      icon={<MdLocationPin />}
      text="Plot Number-09 Ground Floor CISF Campus Road, Ahinsha Khand-02 Indirapuram, Ghaziabad, Uttar Pradesh, 201014"
    />
    <DetailItem
      icon={<MdAccessTime />}
      text="Open - Monday to Sunday - 10:00AM to 8:00PM"
    />
    <PaymentModes />
    <div className="getDirectionContainer">
      <a href="/" className="getDirectionBtn">Get Directions</a>
    </div>
  </div>
);

const DetailItem = ({ icon, text }) => (
  <div className="mt-3 d-flex gap-2">
    <div>{icon}</div>
    <div>{text}</div>
  </div>
);

const Hero = () => (
  <div className="HeroContainer">
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <Slider />
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <DealerDetail />
      </div>
    </div>
  </div>
);

export default Hero;
