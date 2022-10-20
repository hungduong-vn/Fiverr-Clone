import React from "react";
import styled from "styled-components";
import { styles } from "../../../constants/styles";
import GlobeIcon from "../../../components/Svg/GlobeIcon";
import AccessibilityIcon from "./AccessibilityIcon";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  color: ${styles.colorSecondary};
  fill: ${styles.colorSecondary};
  section {
    margin-right: 0.25rem;
    &:hover {
      background-color: #efeff0;
      transition: background-color 0.2s;
      color: currentColor;
      border-radius: 20px;
      /* margin: -8px; */
      /* padding: 8px; */
    }
    button {
      font-size: 14px;
      font-weight: 600;
      padding: 0.5rem 0.75rem;
      span.title-icon {
        padding-right: 0.5rem;
        svg {
          height: 1rem;
          width: 1rem;
        }
      }
    }
  }
  button {
    color: ${styles.colorSecondary};
    background: none;
    border: none;
    padding-left: 8px;
    white-space: nowrap;
  }
`;

export default function FooterSettings() {
  return (
    <Wrapper>
      <section className="language-settings">
        <button>
          <GlobeIcon />
          English
        </button>
      </section>
      <section className="currency-settings">
        <button>$ USD</button>
      </section>
      <button>
        <AccessibilityIcon />
      </button>
    </Wrapper>
  );
}
