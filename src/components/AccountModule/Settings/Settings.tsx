import React from "react"
import { AppContainer } from "../../../assets/styles/AppContainer"
import IntegrationItem from "./IntegrationItem/IntegrationItem"
import { IFacebook, IInstagram, ISpotify } from "./IntegrationItem/IntegrationIcon.model"
import { Link } from "react-router-dom"
import { ProfileRoute } from "../../../router/constants/ClientRoutes"
import { Row } from "react-bootstrap"
import UploadCalendar from '../UploadCalendar/UploadCalendar'
import { PageWrapper } from "../../../assets/styles/PageWrapper"

export default function Settings () {
  return (
    <PageWrapper>
      <AppContainer>
        <Row className="mb-2">
          <Link to={ProfileRoute}>
            Back to Profile
          </Link>
        </Row>
        <IntegrationItem icon={IFacebook} />
        <IntegrationItem icon={IInstagram} />
        <IntegrationItem icon={ISpotify} />
        <UploadCalendar/>
      </AppContainer>
    </PageWrapper>
  )
}