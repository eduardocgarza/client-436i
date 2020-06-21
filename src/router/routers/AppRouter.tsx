import React from "react"
import { BrowserRouter } from "react-router-dom"
import MainAppSwitch from "../switches/MainAppSwitch"
import AppNav from "../../components/Shared/Nav/AppNav"
import FooterNav from "../../components/Shared/Nav/FooterNav"

export default function AppRouter () {
  return (
    <BrowserRouter>
      <AppNav />
      <MainAppSwitch />
      <FooterNav />
    </BrowserRouter>
  )
}