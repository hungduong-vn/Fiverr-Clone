import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../../../constants/common";
import { styles } from "../../../../constants/styles";
import Stars from "../../../../components/Home/Stars/Stars";
import ContactSellerBtn from "../../JobPlans/ContactSellerBtn/ContactSellerBtn";

export default function AboutSellerTop({ sellerTop }) {
  const stars = sellerTop.stars || 5;
  return (
    <Styled>
      <div className="about-seller-avatar">
        <img src={sellerTop.avatar} alt="" />
      </div>
      <div className="about-seller-meta">
        <Link className="seller-name-link" to={`/user/${sellerTop.name}`}>
          {sellerTop.name}
        </Link>
        <div className="seller-title">{sellerTop.title}</div>
        <div className="seller-rating">
          <Stars totalStars={stars}/>
          <span className="rating-count">(500)</span>
        </div>
        <div className="seller-contact">
          <ContactSellerBtn innerText={"Contact Me"} />
        </div>
      </div>
    </Styled>
  );
}
const Styled = styled.div`
  font-size: 14px;
  .about-seller-avatar {
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    img {
      max-width: 110px;
      max-height: 110px;
    }
  }
  .about-seller-meta {
    text-align: center;
  }
  .seller-name-link {
    color: #000;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
  .stars {
    color: #ffbe5b;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .seller-rating {
    display: flex;
    justify-content: center;
  }
  .rating-count {
    margin-left: 5px;
  }
  .seller-title {
    color: ${styles.colorPrimary};
  }
  .seller-contact {
    .contact-seller-btn-wrapper {
      margin-top: 0;
      background-color: transparent !important;
    }
    .contact-seller-btn {
      font-size: 14px;
      line-height: 14px;
      padding: 0.75rem 1.5rem;
    }
  }
  @media screen and (min-width: ${breakpoints.medium}px) {
    display: flex;
    .about-seller-avatar {
      display: block;
    }
    .stars,
    .seller-rating {
      justify-content: flex-start;
    }
    .about-seller-meta {
      text-align: left;
    }
    .seller-contact {
      margin-left: -24px;
    }
  }
`;
