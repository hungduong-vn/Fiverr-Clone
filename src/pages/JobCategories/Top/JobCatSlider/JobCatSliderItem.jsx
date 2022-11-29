import React from "react";
import styled, { css } from "styled-components";

const Styled = styled.div`
  min-width: fit-content;
  padding: 0 0.5rem;
  cursor: pointer;
  ${(props) =>
    props.fixedWidth &&
    css`
      width: 308px;
      padding: 0;
      .jobcat-slider-item-wrapper {
        width: 308px;
      }
    `}
  &:hover {
    .jobcat-slider-item-name {
      color: #1dbf73;
    }
    .go-to-arrow {
      fill: #1dbf73;
    }
  }
  .jobcat-slider-item-wrapper {
    display: flex;
    padding: 0.75rem;
    align-items: center;
    border-radius: 12px;
    color: #404145;
    border: 1px solid #efeff0;
  }
  img {
    width: 3rem;
    height: 3rem;
    margin-right: 0.75rem;
  }
  .jobcat-slider-item-name {
    transition: all 0.3s;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-right: 0.75rem;
  }
  .go-to-arrow {
    fill: #74767e;
    background: none;
    border: none;
    display: flex;
    margin: 0;
    margin-left: auto;
    padding: 0;
    outline: none;
    align-items: center;
  }
`;
export default function JobCatSliderItem({ item, fixedWidth }) {
  return (
    <Styled className="jobcat-slider-item" fixedWidth={fixedWidth}>
      <div className="jobcat-slider-item-wrapper box-shadow-z2">
        <img src={item.img} alt={item.name} />
        <span className="jobcat-slider-item-name">{item.name}</span>
        <span
          className="go-to-arrow m-l-12"
          aria-hidden="true"
          style={{ width: "1rem", height: "1rem" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
          </svg>
        </span>
      </div>
    </Styled>
  );
}
