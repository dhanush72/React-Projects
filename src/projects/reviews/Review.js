import React from "react";
import "./review.css";
import { FaGithubSquare } from "react-icons/fa";
import Reviews from "./Reviews";

const Review = () => {
  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Reviews />
      </section>
    </main>
  );
};

export default Review;
