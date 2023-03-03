import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Collapsible from "../../../components/Home/Collapsible/Collapsible";

const Styled = styled.div`
  .collapsible {
    padding: 0.5rem 0;
  }
  .collapsible-title {
    color: #95979d;
    font-size: 1rem;
  }
  .content {
    background-color: transparent;
  }
  .job-cat-ul {
    li {
      padding: 0.5rem 0;
      a {
        color: #95979d;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default function SideBarCatgories({ title, data, closeSideBar }) {
  const collapseContent = data && (
    <ul className="job-cat-ul">
      {data.map(({ id, name }) => (
        <li key={id}>
          <Link onClick={closeSideBar} to={`/categories/${id}`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
  const titleEle = <div className="collapsible-title">{title}</div>;
  return (
    <Styled>
      <Collapsible title={titleEle} content={collapseContent} />
    </Styled>
  );
}
