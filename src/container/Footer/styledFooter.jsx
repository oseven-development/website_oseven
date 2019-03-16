/** @format */

// StyledComponend
import styled from 'styled-components'

export const StyledFooter = styled.footer`
  padding-top: 2em;
  text-align: center;
  width: 100%;
  color: #333;
  background-image: linear-gradient(45deg, #ddd 0%, #f1f1f1 50%);
`

export const StyledFooterList = styled.ul`
  padding: 0 0 1em 0;
  li {
    font-size: 0.9em;
    padding: 0.25em 0;
    a,
    span {
      color: #333;
      &:hover {
        color: ${props => props.theme.colors.main};
      }
    }
  }
`

export const StyledFooterSocialIcons = styled.div`
  margin-top: 15;

  transition: 0.2s;
  img {
    padding: 7px;
    margin: 0 5px;
    border-radius: 50px;
    background-color: ${props => props.theme.colors.black};
    &:hover {
      background-color: ${props => props.theme.colors.main};
    }
  }
`
