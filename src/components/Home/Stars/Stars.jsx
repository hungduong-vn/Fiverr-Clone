import styled from "styled-components";
import EmptyStarIcon from "../../Svg/Stars/EmptyStarIcon";
import FullStarIcon from "../../Svg/Stars/FullStarIcon";
import HalfStarIcon from "../../Svg/Stars/HalfStarIcon";

export default function Stars({
  totalStars,
  numStars = 5,
  fillColor = "#ffbe5b",
}) {
  const renderStar = (stars, StarEle, className) =>
    [...Array(stars)].map((_, idx) => (
      <span key={idx} className={className}>
        <StarEle color={fillColor} />
      </span>
    ));
  const renderAllStars = () => (
    <>
      {renderStar(fullStars, FullStarIcon, "full-star")}
      {renderStar(halfStar, HalfStarIcon, "half-star")}
      {renderStar(emptyStars, EmptyStarIcon, "empty-star")}
    </>
  );
  const fullStars = Math.floor(totalStars);
  const halfStar = fullStars !== totalStars ? 1 : 0;
  const emptyStars = numStars - fullStars - halfStar;
  return (
    <Styled className="stars" fill={fillColor}>
      {numStars === 1
        ? renderStar(1, FullStarIcon, "full-star")
        : renderAllStars()}
      <span className="total-star">{totalStars}</span>
    </Styled>
  );
}

const Styled = styled.div`
  display: flex;
  align-items: center;
  fill: ${({ fill }) => fill};
  color: ${({ fill }) => fill};
  .total-star {
    margin-left: 5px;
    font-weight: bold;
  }
`;
