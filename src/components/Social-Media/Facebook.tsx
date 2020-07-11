import React, { useState } from "react"
import FacebookLogin from "react-facebook-login"
import { Card} from 'react-bootstrap';

export default function Facebook() {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});

  function facebookSuccess(response: any) {
    console.log("Facebook Response: ", response)
    setData(response);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    const payload =  response.accessToken

    // await api.insertMessage(payload).then(res: => {
    //   console.log(res)
    // })
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
            scope="public_profile,user_friends, user_gender, user_birthday, user_age_range, user_hometown"
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
