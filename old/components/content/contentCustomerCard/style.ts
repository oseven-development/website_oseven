/** @format */
import styled from 'styled-components'
export const StyledButton = styled.button`
  position: absolute;
  top: 0;
  border: none;
  width: 50px;
  height: 100%;
  transition: background 0.2s;
  cursor: pointer;
  /* opacity: 0.3; */
  background: rgba(235, 235, 235, 0.2);
  /* background-image: linear-gradient(to right, rgba(235, 235, 235, 0.2) 80%, rgba(235, 235, 235, 0) 100%); */
  :hover {
    background: rgba(235, 235, 235, 0.4);
    /* opacity: 0.5; */
  }
  :last-child {
    right: 0;
  }
  :focus {
    outline: 0;
  }
  :before,
  :after {
    content: '';
    height: 1px;
    width: 20px;
    background: black;
    display: block;
    opacity: 1;
    position: absolute;
    top: 50%;
  }
  :before {
    transform: translate(10px, 7px) rotate(45deg);
  }
  :after {
    transform: translate(10px, -7px) rotate(-45deg);
  }
  :last-child {
    :before,
    :after {
    }
    :before {
      transform: translate(20px, 7px) rotate(-45deg);
    }
    :after {
      transform: translate(20px, -7px) rotate(45deg);
    }
  }
`

export const StyledShadowBoxWrapper = styled.div`
  box-shadow: ${({theme}) => theme.shadows.large};
  padding: 0 20px;
  /* height: 100%; */
  /* margin-bottom: 1em; */
  @media screen and (${props => props.theme.device.laptop}) {
    /* height: 400px; */
    margin-top: 1em;
    margin-bottom: 0;
  }
`

export const StyledShadowBoxInner = styled.div`
  overflow: hidden;
  max-height: 400px;
  height: 400px;
  @media screen and (${props => props.theme.device.laptop}) {
    max-height: 200px;
    height: 200px;
  }
`
