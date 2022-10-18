import React from 'react'
import styled from 'styled-components'
import GlobeIcon from '../../../Svg/GlobeIcon'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  section {
    margin-right: 0.25rem;
  }
`
export default function FooterSettings() {
  return (
    <Wrapper>
      <section className='language-settings'>
        <GlobeIcon/> English
      </section>
      <section className='currency-settings'>
        $ USD
      </section>
    </Wrapper>  
  )
}
