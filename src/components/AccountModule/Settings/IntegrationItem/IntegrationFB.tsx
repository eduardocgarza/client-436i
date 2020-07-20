import React, { useState } from "react"
import { Row, Col, Button } from "react-bootstrap"
import styled from "styled-components"
import { IntegrationIcon } from "./IntegrationIcon.model"
import FacebookLogin from "react-facebook-login"
import useSessionContext from "../../../../state/context/SessionContext"
import { FacebookRequest } from "../../../../network/NetworkRequests"

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
  const [isConnected, setConnected] = useState(false)
  const { api } = useSessionContext()

  async function handleConnect() {
    switch (props.service) {
      case "facebook": {
        setConnected(!isConnected)
      }
    }
  }

  async function facebookSuccess(response: any) {
    console.log("Facebook Response: ", response)
    const payload =  {
      accessToken: response.accessToken,
      id: response.id,
      email: response.email,
      name: response.name
    }
    
    await api.apiRequest(FacebookRequest(payload))
    setConnected(!isConnected)
  }

  function componentClicked() {
    console.log("also clicked")
  }

  const UsernameText = <ItemName>@eduardo</ItemName>

  const ConnectText = <ItemNameDisable>Connect Profile</ItemNameDisable>

  const DisconnectButton = (
    <Button onClick={handleConnect} variant="light">
      Disconnect
    </Button>
  )

  const ConnectButton = (
    <FacebookLogin
        appId="596845454274053"
        autoLoad={false}
        fields="name,email"
        onClick={componentClicked}
        scope="public_profile, user_gender, user_birthday, user_age_range, user_hometown, user_likes"
        callback={facebookSuccess}
        textButton = "Connect"  
        cssClass="btnFacebook"
    />
  )

  const ActivateIcon = <Icon src={props.icon.regular} />
  const DisableIcon = <Icon src={props.icon.disable} />

  return (
    <ItemContainer>
      <Col>
        <IconContainer className="d-flex align-items-center">
          {isConnected ? DisableIcon : ActivateIcon}
          {isConnected ? UsernameText : ConnectText}
        </IconContainer>
      </Col>
      <Col md="auto">{isConnected ? DisconnectButton : ConnectButton}</Col>
    </ItemContainer>
  )
}
