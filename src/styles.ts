import styled from 'styled-components'

export const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  transition: width .25s ease, padding .25s ease;
  margin-top: 60px;
  @media (min-width: 600px) {
    padding: 20px;
    width: 1000px;
  }
  @media (min-width: 1280px) {
    padding: 20px;
    width: 1100px;
  }
`

export const TosWrapper = styled.div`
  position: relative;
  &:after {
    content: " ";
    background: linear-gradient(180deg, transparent, #15151f);
    height: 50px;
    pointer-events: none;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
`

export const TosInner = styled.div`
  max-height: 600px;
  padding: 0px;
  overflow: auto;
  position: relative;
`
