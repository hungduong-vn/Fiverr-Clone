import React, { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .collapsible {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .collapsible-icon {
      transition: all 0.3s;
      ${({ isCollapsed }) => (isCollapsed ? "" : `transform: rotate(180deg)`)}
    }
    &:focus {
      background-color: transparent;
    }
  }

  .active,
  .collapsible:hover {
    /* background-color: #ccc; */
  }

  .content {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color: #f1f1f1;
  }
`;

export default function Collapsible({ title, content }) {
  const btnRef = useRef(null);
  const contentRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleBtn = () => {
    btnRef.current.classList.toggle("active");
    if (contentRef.current.style.display === "block") {
      contentRef.current.style.display = "none";
      setIsCollapsed(true);
    } else {
      contentRef.current.style.display = "block";
      setIsCollapsed(false);
    }
  };
  return (
    <Wrapper isCollapsed={isCollapsed}>
      <button
        onClick={toggleBtn}
        ref={btnRef}
        type="button"
        className="collapsible"
      >
        {title}
        <i className="collapsible-icon fas fa-chevron-down"></i>
        {/* <i className="fas fa-chevron-up"></i> */}
      </button>
      <div ref={contentRef} className="content">
        {content}
      </div>
    </Wrapper>
  );
}
