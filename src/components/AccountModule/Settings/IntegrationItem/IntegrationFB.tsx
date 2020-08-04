import React, { useState } from "react"
import { Row, Col, Button } from "react-bootstrap"
import styled from "styled-components"
import { IntegrationIcon } from "./IntegrationIcon.model"
import FacebookLogin from "react-facebook-login"
import useSessionContext from "../../../../state/context/SessionContext"
import { FacebookRequest } from "../../../../network/NetworkRequests"
import useAppContext from "../../../../state/context/ApplicationContext"
import './IntegrationFb.css'

const ItemContainer = styled(Row)`
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
`

const IconContainer = styled.div``

const Icon = styled.img`
  display: block;
  height: 40px;
  margin-right: 10px;
  width: 40px;
`
export const ItemName = styled.p`
  font-size: 15px;
  margin: 0;
`

export const ItemNameDisable = styled(ItemName)`
  color: #999;
`

interface IntegrationItemProps {
  icon: IntegrationIcon
  service: string
}

export default function IntegrationFB(props: IntegrationItemProps) {
  const { api } = useSessionContext()
  const { accountState } = useAppContext()
  const { account, setAccount } = accountState
  const [isConnected, setConnected] = useState(account.facebookVerified)

  async function handleConnect() {
    switch (props.service) {
      case "facebook": {
        setConnected(!isConnected)
      }
    }
  }

  function refreshPage() {
    window.location.reload(false);
  }

  async function facebookSuccess(response: any) {
    if (response.status === "unknown") {
      // don't do anything, User did not log in
    } else {
      const payload =  {
        accessToken: response.accessToken,
        id: response.id,
        email: response.email,
        name: response.name,
        profilePicURL: response.picture.data ? response.picture.data.url : null
      }
  
      await api.apiRequest(FacebookRequest(payload))
      setConnected(!isConnected)
      refreshPage()  
    }
  }

  function componentClicked() {
  }

  const UsernameText =  <ItemName>{account.facebookVerified ? account.facebook.name : null} </ItemName>
  // const UsernameText =  <ItemName>ff </ItemName>
  const ConnectText = <ItemNameDisable>Connect Profile</ItemNameDisable>

  const DisconnectButton = (
    <Button onClick={handleConnect} variant="light" disabled>
      Connected
    </Button>
  )

  const ConnectButton = (
    <FacebookLogin
      appId="596845454274053"
      autoLoad={false}
      fields="name,email,picture"
      onClick={componentClicked}
      scope="public_profile, user_gender, user_birthday, user_age_range, user_hometown, user_likes"
      callback={facebookSuccess}
      textButton="Connect"  
      cssClass="btnFacebook"
    />
  )

  const ActivateIcon = <Icon src={props.icon.regular} />
  const DisableIcon = <Icon src={props.icon.disable} />

  return (
    <ItemContainer>
      <Col>
        <IconContainer className="d-flex align-items-center">
          {account.facebookVerified ? ActivateIcon : DisableIcon}
          {account.facebookVerified ? UsernameText : ConnectText}
        </IconContainer>
      </Col>
      <Col md="auto">{account.facebookVerified ? DisconnectButton : ConnectButton}</Col>
    </ItemContainer>
  )
}
