import ReviewCard from "../components/ReviewCard";
import { reviews } from "../data/reviewsData";
import "../styles/reviews.css";

const Reviews: React.FC = () => {
  return (
    <section id="REVIEWS" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">
          What People Say About Me
        </h2>

        <ul className="review-text list-unstyled">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Reviews;
