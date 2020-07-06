import React, { createContext, useState, useEffect } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import educonnectionsAPI from '../../../network/educonnectionsAPI'
import { AxiosRequestConfig } from "axios"
// import { FloatingActionButton } from "material-ui/FloatingActionButton"

export default function UploadCalendar () {
  const { register , handleSubmit } = useForm();
  const [api] = useState (educonnectionsAPI.getApi())


  const onSubmit = async (data: any) => {
    let fd = new FormData();
    fd.append('calendar', data.calendar[0])

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/calendar',
      data: fd
    }
    
    const x = await api.requestWithConfig(config);
    console.log(x)
  }
  
  return (
    <div className="calendarUpload">
      <Title>My Classes</Title>
      <p> You have not yet uploaded your calendar. To display your courses and classmates, go to your UBC SSC and <Redirect href="https://courses.students.ubc.ca/" target="_blank" rel="noopener noreferrer" style={{display: "inline"}}>download your schedule</Redirect>. </p>
      {/* <FloatingActionButton> Hello </FloatingActionButton> */}
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <input ref={register} type='file' name ='calendar' />
        <button> Upload </button>   
      </form>
    </div>
  )
}

const Title = styled.h1`
  padding: 1em;
`;

const Redirect = styled.a`
  display: inline;
`