import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Collapsible from "../../../../components/Home/Collapsible/Collapsible";
import { breakpoints } from "../../../../constants/common";

const Styled = styled.div`
  .top {
    display: flex;
    align-items: center;
    flex-direction: row;
    img {
      border-radius: 0.5rem;
      width: 80px;
      height: 54px;
    }
  }
  .service-wrapper {
    padding: 0.5rem 0;
    a {
      color: #62646a;
      transition: all 0.3s;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .service-name {
    line-height: 26px;
    font-size: 18px;
    color: #62646a;
  }
  .content {
    background-color: transparent;
    box-shadow: inset 5px #000;
  }

  @media screen and (min-width: 600px) {
    .top {
      display: flex;
      flex-direction: column;
      align-items: normal;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`;

export default function JobCatItem({ item }) {
  const { service, name, img } = item;
  const collapsible = useMediaQuery({
    query: `(max-width: ${breakpoints.medium}px)`,
  });
  const top = (
    <div className="top">
      <img src={img} alt={name} />
      <h3 className="text-display-5 title-wrapper">{name}</h3>
    </div>
  );
  const content = (
    <ul className="jobcat-item-content">
      {service.map((ele) => {
        const url = encodeURIComponent(ele.name);
        return (
          <li className="service-wrapper" key={ele.id}>
            <Link to={`/jobs?query=${url}`}>
              <span className="service-name">{ele.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
  return (
    <Styled>
      <div className="wrapper">
        {collapsible ? (
          <Collapsible title={top} content={content} />
        ) : (
          <>
            {top}
            {content}
          </>
        )}
      </div>
    </Styled>
  );
}
