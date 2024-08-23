import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import "./Reviews.css";

// Sample data for reviews
const reviewsData = [
  {
    userImage: "/images/user.jpg",
    userName: "Vaibhav pal",
    reviewText:
      "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service. We were delighted with your...",
  },
  {
    userImage: "/images/user1.jpg",
    userName: "Gautam Negi",
    reviewText:
      "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend...",
  },
  {
    userImage: "/images/user2.jpeg",
    userName: "Dhruv Aggarwal",
    reviewText:
      "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience...",
  },
  {
    userImage: "/images/user.jpg",
    userName: "Vaibhav pal",
    reviewText:
      "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service. We were delighted with your...",
  },
  {
    userImage: "/images/user1.jpg",
    userName: "Gautam Negi",
    reviewText:
      "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend...",
  },
  {
    userImage: "/images/user2.jpeg",
    userName: "Dhruv Aggarwal",
    reviewText:
      "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience...",
  },
  // Add more reviews as needed
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
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
const ReviewItem = ({ userImage, userName, reviewText }) => (
  <div className="ratingItem">
    <div className="d-flex align-items-center justify-content-between gap-2">
      <div className="d-flex align-items-center gap-2">
        <span className="userImg">
          <img src={userImage} alt="user" />
        </span>
        <h6>{userName}</h6>
      </div>
      <div className="ratingStars d-flex align-items-center">
        {[...Array(5)].map((_, i) => (
          <MdOutlineStarPurple500 key={i} />
        ))}
      </div>
    </div>
    <p className="userContent">{reviewText}</p>
  </div>
);

const Reviews = () => (
  <>
  <h2 className="Reviews-heading mb-4">2278 Google Reviews</h2>
    <div className="reviewsRatings">
      <Carousel
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        autoPlay
        autoPlaySpeed={1000}
        responsive={responsive}
        infinite
      >
        {reviewsData.map((review, index) => (
          <ReviewItem
            key={index}
            userImage={review.userImage}
            userName={review.userName}
            reviewText={review.reviewText}
          />
        ))}
      </Carousel>
    </div>
  </>
);

export default Reviews;
