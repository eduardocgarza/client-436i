import React from "react"
import { PageWrapper } from "../../../assets/styles/PageWrapper"
import homeJumbotron from "../../../assets/images/home.jpg"
import PageHeader from "../../_Shared/PageHeader/PageHeader"
import { HomeJumbotron } from "./HomeStyles"

export default function Home () {
  return (
    <PageWrapper>
      <PageHeader text="Welcome to educonnections" />
      <HomeJumbotron src={homeJumbotron} />
    </PageWrapper>
  )
}