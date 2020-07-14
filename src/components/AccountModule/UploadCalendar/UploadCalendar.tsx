import React from "react"
import { AxiosRequestConfig } from "axios"
import { useForm } from "react-hook-form"
import useSessionContext from "../../../state/context/SessionContext"
import { Redirect, Title } from "./UploadCalendarStyles"

export default function UploadCalendar () {
  const { register, errors, handleSubmit } = useForm()
  const { api } = useSessionContext()

  async function onSubmit(data: any) {
    let fd = new FormData();
    fd.append("calendar", data.calendar[0])

    const config: AxiosRequestConfig = {
      method: "POST",
      url: "/calendar",
      data: fd
    }
    
    const x = await api.requestWithConfig(config);
    if (x) {
      console.log(x);
    }
  }
  
  return (
    <div className="calendarUpload">
      <Title>My Classes</Title>
      <p>
        You have not yet uploaded your calendar. To display your courses and classmates, go to your UBC SSC and <Redirect href="https://courses.students.ubc.ca/" target="_blank" rel="noopener noreferrer" style={{ display: "inline" }}>download your schedule</Redirect>. 
      </p>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <input 
          ref={register({ required: true })} 
          type="file" 
          name ="calendar"
        />
        {errors.calendar && "A file is required"}
        <button>Upload</button>   
      </form>
    </div>
  )
}

