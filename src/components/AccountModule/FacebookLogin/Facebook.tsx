import React, { useState } from "react"
import FacebookLogin from "react-facebook-login"
import { Card} from 'react-bootstrap';
import axios from 'axios'

export default function Facebook() {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const api = axios.create({
    baseURL: 'http://localhost:5000/', //TODO: change to prod 
  })

  async function facebookSuccess(response: any) {
    console.log("Facebook Response: ", response)
    setData(response);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    const payload =  {
      accessToken: response.accessToken,
      username: "username", //TODO: username of the account
      id: response.id,
      email: response.email,
      name: response.name
    }
    
    await api.post("/facebook/connect",payload).then(res => {
        console.log(res)
    })
  }

  function componentClicked() {
    console.log("also clicked")
  }

  return (
    <div>
      <div className="container">
        <div className="center">
          { !login &&
          <FacebookLogin
            appId="596845454274053"
            autoLoad={true}
            fields="name,email"
            onClick={componentClicked}
            scope="public_profile, user_gender, user_birthday, user_age_range, user_hometown, user_likes"
            callback={facebookSuccess}
            icon="fa-facebook-f"
          />}
          {login && <Card>Log Out button</Card>} 
          {/* TODO */}
        </div>
      </div>
    </div>
  )
}
