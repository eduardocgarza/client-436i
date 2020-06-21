import styled from "styled-components"
import { Link } from "react-router-dom"

export const Logo = styled.img`
  display: block;
  height: 25px;
  width: 25px;
`

export const NavItem = styled(Link)`
  display: block;
  padding: 8px;
  margin-right: 8px;
  text-decoration: none;
`

export const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`