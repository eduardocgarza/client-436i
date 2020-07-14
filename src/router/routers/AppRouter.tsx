import React from "react"
import { BrowserRouter } from "react-router-dom"
import MainAppSwitch from "../switches/MainAppSwitch"
import AppNav from "../../components/_Shared/Nav/AppNav"
import FooterNav from "../../components/_Shared/Nav/FooterNav"

export default function AppRouter () {
  return (
    <BrowserRouter>
      <AppNav />
      <MainAppSwitch />
      <FooterNav />
    </BrowserRouter>
  )
}