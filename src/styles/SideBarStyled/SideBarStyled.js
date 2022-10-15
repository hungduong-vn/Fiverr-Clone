import styled from "styled-components";
import { styles } from "../../constants/styles";

export const SideBarStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 272px;
  background-color: #fff;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  color: ${styles.colorPale};
  font-size: ${styles.fontSizePrimary};

  & > div {
    padding-bottom: 1.25rem;
  }

  .sidebar-header button {
    color: #fff;
    font-weight: ${styles.weightSemiBold};
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: ${styles.colorFiverr};
    padding: 0.75rem 1.5rem;
    line-height: 1rem;
  }
  .sidebar-menu {
    .sidebar-item {
      padding: 0.5rem 0;
    }
    & .sidebar-item:last-child {
      font-weight: ${styles.weightSemiBold};
      color: ${styles.colorFiverr};
    }
  }
  .sidebar-footer {
    padding: 0.625rem 0;
    .footer-title {
      padding: 0.5rem 0;
      font-size: 0.875rem;
      color: ${styles.colorDark};
      border-bottom: 1px solid ${styles.colorLight};
      font-weight: ${styles.weightSemiBold};
    }
    .footer-item {
      padding: 0.5rem 0;
      svg {
        fill: ${styles.colorPale}
      }
    }
  }
`;
