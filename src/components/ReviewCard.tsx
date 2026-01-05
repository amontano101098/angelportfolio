import type { Review } from "../types/review";
import "../styles/reviews.css";
interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const {
    name = "Anonymous",
    role,
    avatar,
    review: reviewText = "",
    date,
  } = review;

  const paragraphs = reviewText
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <li className="project_card mb-4 position-relative">
      <div className="container-fluid px-3">
        <div className="row g-3 align-items-center">

          {/* Avatar */}
          <div className="col-auto d-flex justify-content-center">
            <img 
              loading="lazy"
              src={avatar || "/img/default-avatar.png"}
              alt={`${name} avatar`}
            />
          </div>

          {/* Content */}
          <div className=" reviews-grid col">
            <div className="d-flex flex-column">

              {/* Name & Role */}
              <div>
                <strong>{name}</strong>
                {role && (
                  <small className="d-block">
                    {role}
                  </small>
                )}
              </div>

              {/* Review Body */}
              {paragraphs.map((p, index) => (
                <p
                  key={index}
                  className="mt-2 mb-0 review-body"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}

              {/* Date */}
              {date && (
                <small className="text-muted mt-2">
                  {date}
                </small>
              )}

            </div>
          </div>

        </div>
      </div>
    </li>
  );
};

export default ReviewCard;
