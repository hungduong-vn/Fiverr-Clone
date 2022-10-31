import React from 'react'
import styled from 'styled-components'
import { styles } from '../../../../constants/styles';
import JobsFilterSmall from './JobsFilterSmall';
import JobsTogglersSmall from './JobsTogglersSmall';

const Styled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  .jobs-top-small-btn {
    text-align: center;
    width: 100%;
    padding: 0.5rem 0;
    border: 1px solid ${styles.colorLight};
    border-radius: 4px;
  }
`;

export default function JobsTopSmall() {
  return (
    <Styled>
      <JobsFilterSmall/>
      <JobsTogglersSmall/>
    </Styled>
  )
}
