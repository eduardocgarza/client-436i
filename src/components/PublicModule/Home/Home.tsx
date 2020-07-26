import React from "react"
import { PageWrapper } from "../../../assets/styles/PageWrapper"
import homeJumbotron from "../../../assets/images/home.jpg"
import PageHeader from "../../_Shared/PageHeader/PageHeader"
import { HomeJumbotron } from "./HomeStyles"
import { HeaderTwo, ParagraphItem } from "../../_Shared/Layout/Layout"

export default function Home () {
  return (
    <PageWrapper>
      <PageHeader text="Welcome to educonnections" />
      <HeaderTwo text="educonnections" />
      <ParagraphItem text="educonnections is a social media platform that matches you with other students at your university based on common artists, classes, likes, and songs. Our platform helps students meet online by matching with each other based on common Facebook likes, Spotify artists and songs, and UBC classes."/>
      <HomeJumbotron src={homeJumbotron} />
    </PageWrapper>
  )
}