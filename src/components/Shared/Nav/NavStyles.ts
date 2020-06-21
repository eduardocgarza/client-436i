import styled from "styled-components"
import { Link } from "react-router-dom"
import { APP_BLUE, APP_BLUE_LIGHT } from "../../../models/constants/Colors"

const Container = styled.nav`
  align-items: center;
  background: ${APP_BLUE_LIGHT};
  display: flex;
  justify-content: space-between;
  height: 48px;
  padding: 0 16px;
`

export const NavContainer = styled(Container)`
  border-bottom: 1px solid #F4F4F4;
`

export const FooterNavContainer = styled(Container)`
  border-top: 1px solid #F4F4F4;
`

export const Nav = styled.nav`
  align-items: center;
  display: flex;
`

export const NavLeft = styled(Nav)`
  flex: 1;
  justify-content: flex-start;
`

export const NavCenter = styled(Nav)`
  flex: 1;
  justify-content: center;
  text-align: center;
`

export const NavRight = styled(Nav)`
  flex: 1;
  justify-content: flex-end;
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
  color: white;
  cursor: pointer;
  display: block;
  font-family: "Sen", sans-serif;
  font-size: 13px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`