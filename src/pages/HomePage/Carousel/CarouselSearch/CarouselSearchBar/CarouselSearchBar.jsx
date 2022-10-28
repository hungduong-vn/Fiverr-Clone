import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "../../../../../components/Svg/SearchIcon";
import { styles } from "../../../../../constants/styles";
import CarouselSearchBtn from "./CarouselSearchBtn";
import CarouselSearchInput from "./CarouselSearchInput";

const Styled = styled.form`
  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  position: relative;
`;

export default function CarouselSearchBar() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    navigate(`/jobs/${query}`);
  };
  return (
    <Styled onSubmit={handleSubmit}>
      <SearchIcon width={16} height={16} fill={styles.colorPale} />
      <CarouselSearchInput />
      <CarouselSearchBtn />
    </Styled>
  );
}
