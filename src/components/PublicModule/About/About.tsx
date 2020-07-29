import React from "react"
import { PageWrapper } from "../../../assets/styles/PageWrapper"
import { HeaderTwo, ParagraphItem } from "../../_Shared/Layout/Layout"
import PageHeader from "../../_Shared/PageHeader/PageHeader"

export default function About () {
  return (
    <PageWrapper>
      <PageHeader text="About Us" />
      <HeaderTwo text="educonnections" />
      <ParagraphItem text="educonnections is a social media platform that matches you with other students at your university based on common artists, classes, likes, and songs."/>
      <HeaderTwo text="Problem"/>
      <ParagraphItem text="Canadian universities today accept students from hundreds of countries around the world. New students often have trouble meeting people, and the majority of students don't until they arrive on campus the first day." />
      <HeaderTwo text="Our Mission" />
      <ParagraphItem text="Our platform helps students meet online by matching with each other based on common Facebook likes, Spotify artists and songs, and UBC classes."/>
      <HeaderTwo text="Data Opt-in Benefits" />
      <ParagraphItem text="The app is a facilitator for people to match with each other based on common interests. With the built-in APIs of various services, we hope to make connecting with people “one click away” Users will be able to click links that will take them to the applications they have integrated and initialize conversations on there." />
      <HeaderTwo text="Data Opt-out &amp; Deletion" />
      <ParagraphItem text="Our platform will allow users to delete their data at any point. Once your data is deleted in the client, it will also be deleted in our servers and databases. No existing copy with remain. Be aware that by deleting data, you may lose matches that you had before." />
    </PageWrapper>
  )
}