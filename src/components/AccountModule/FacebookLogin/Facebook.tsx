import React, { useState } from "react"
import FacebookLogin from "react-facebook-login"
import { Button} from 'react-bootstrap';
import useSessionContext from "../../../state/context/SessionContext"
import { FacebookRequest } from "../../../network/NetworkRequests";

export default function Facebook() {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const { api } = useSessionContext()

  async function facebookSuccess(response: any) {
    setData(response);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    const payload =  {
      accessToken: response.accessToken,
      id: response.id,
      email: response.email,
      name: response.name
    }
    
    await api.apiRequest(FacebookRequest(payload))
  }

  function componentClicked() {
    // need to keep this here
  }

  return (
    <div>
      <div className="container">
        <div className="center">
          { !login &&
          <FacebookLogin
            appId="596845454274053"
            autoLoad={false}
            fields="name,email"
            onClick={componentClicked}
            scope="public_profile, user_gender, user_birthday, user_age_range, user_hometown, user_likes"
            callback={facebookSuccess}
            textButton = "Connect"  
          />}
          {login && <Button>Disconnect</Button>} 
          {/* TODO: delete FB data */}
        </div>
      </div>
    </div>
  )
}
