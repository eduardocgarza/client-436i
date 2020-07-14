import React from "react"
import { AppWrapper, AppContainer } from "../../../assets/styles/AppContainer"
import styled from "styled-components"
import IntegrationItem from "./IntegrationItem/IntegrationItem"
import { IFacebook, IInstagram, ISpotify } from "./IntegrationItem/IntegrationIcon.model"
import { Link } from "react-router-dom"
import { ProfileRoute } from "../../../router/constants/ClientRoutes"
import { Row } from "react-bootstrap"
import Spotify from "../Spotify/Spotify"
import UploadCalendar from '..//UploadCalendar/UploadCalendar'

const SettingsHeader = styled.h1`
  font-size: 26px;
  font-weight: bold;
  padding: 30px;
  text-align: center;
`

export default function Settings () {
  return (
    <AppWrapper>
      <AppContainer>
        <SettingsHeader>
          Manage Profiles
        </SettingsHeader>
        <Row className="mb-2">
          <Link to={ProfileRoute}>
            Back to Profile
          </Link>
        </Row>
        <IntegrationItem icon={IFacebook} service="facebook"/>
        <IntegrationItem icon={IInstagram} service="instagram"/>
        <IntegrationItem icon={ISpotify} service="spotify"/>
        <UploadCalendar/>
      </AppContainer>
    </AppWrapper>
  )
}