import React from "react"
import { AxiosRequestConfig } from "axios"
import { useForm } from "react-hook-form"
import useSessionContext from "../../../state/context/SessionContext"
import { Button } from "react-bootstrap"
import { 
  CalendarUploadWrapper, 
  CalendarContainer,
  Redirect, 
  Title 
} from "./UploadCalendarStyles"
import { useHistory } from "react-router-dom"
import { MyCoursesRoute } from "../../../router/constants/ClientRoutes"

export default function UploadCalendar () {
  const { register, errors, handleSubmit } = useForm()
  const { api } = useSessionContext()
  const history = useHistory()

  async function onSubmit(data: any) {
    let fd = new FormData();
    fd.append("calendar", data.calendar[0])

    const config: AxiosRequestConfig = {
      method: "POST",
      url: "/courses",
      data: fd
    }

    try {
      const response = await api.requestWithConfig(config)
      console.log("Response from upload: ", response)
    }
    catch (error) {
      console.log("Error: ", error)
    }
    history.push(MyCoursesRoute)
  }
  
  return (
    <CalendarUploadWrapper>
      <CalendarContainer>
        <Title>Upload Calendar</Title>
        <p>
          You have not yet uploaded your calendar. To display your courses and classmates, go to your UBC SSC and <Redirect href="https://courses.students.ubc.ca/" target="_blank" rel="noopener noreferrer" style={{ display: "inline" }}>download your schedule</Redirect>. 
        </p>
        <form encType="multipart/form-data">
          <input 
            ref={register({ required: true })} 
            type="file" 
            name ="calendar"
          />
          {errors.calendar && "A file is required"}
          <Button onClick={handleSubmit(onSubmit)} variant="primary">Upload</Button>
        </form>
      </CalendarContainer>
    </CalendarUploadWrapper>
  )
}

