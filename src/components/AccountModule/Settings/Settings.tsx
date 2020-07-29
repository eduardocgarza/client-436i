import React, { useEffect } from "react"
import { AppContainer } from "../../../assets/styles/AppContainer"
import IntegrationSpotify from "./IntegrationItem/IntegrationSpotify"
import { IFacebook, ISpotify } from "./IntegrationItem/IntegrationIcon.model"
import { Link } from "react-router-dom"
import { ProfileRoute } from "../../../router/constants/ClientRoutes"
import { Row } from "react-bootstrap"
import { PageWrapper } from "../../../assets/styles/PageWrapper"
import IntegrationFB from "./IntegrationItem/IntegrationFB"
import useSessionContext from "../../../state/context/SessionContext"
import { AxiosResponse } from "axios"
import { GetAccountRequest } from "../../../network/NetworkRequests"
import useAppContext from "../../../state/context/ApplicationContext"
import { IAccount } from "../../../state/types/IAccount"

export default function Settings () {
  const { accountState } = useAppContext()
  const { setAccount } = accountState
  const { api } = useSessionContext()

  async function fetchProfileData() {
    try {
      const x: AxiosResponse = await api.request(GetAccountRequest())
      if (!x) {
        alert("something went wrong with the API call")
      }
      const y = x.data as IAccount
      setAccount({
        ...y
      })
    } catch (e) {
      console.log(e.errorClientMessage)
    }
  }

  useEffect(() => {
    fetchProfileData()
  }, [])

  return (
    <PageWrapper>
      <AppContainer>
        <Row className="mb-2">
          <Link to={ProfileRoute}>
            Back to Profile
          </Link>
        </Row>
        <IntegrationFB icon={IFacebook} service="facebook"/>
        <IntegrationSpotify icon={ISpotify} service="spotify"/>
      </AppContainer>
    </PageWrapper>
  )
}