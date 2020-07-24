import React, { useEffect } from "react"
import CoursesContent from "../CoursesContent/CoursesContent"
import CoursesHeader from "../CoursesHeader/CoursesHeader"
import PageHeader from "../../../_Shared/PageHeader/PageHeader"
import { PageWrapper } from "../../../../assets/styles/PageWrapper"
import useAppContext from "../../../../state/context/ApplicationContext"
import UploadCalendar from "../../../AccountModule/UploadCalendar/UploadCalendar"
import { GetCourseRequest } from "../../../../network/NetworkRequests"
import useSessionContext from "../../../../state/context/SessionContext"
import { AxiosResponse } from "axios"

export default function MyCourses() {
  const { api } = useSessionContext()
  const { courses, setCourses } = useAppContext()


  async function fetchCoursesData() {    
    try {
      const x: AxiosResponse = await api.request(GetCourseRequest())
      if (!x) {
        alert("something went wrong with the API call")
      }
      const courses = x.data.courses
      
      setCourses([...courses])
    } catch (e) {
      console.log(e.errorClientMessage)
    }

  }

  useEffect(() => {
    fetchCoursesData()
  }, [])

  return (
    <PageWrapper>
      <PageHeader text="My Courses" />
      {courses.length > 0 ? (
      // {tempShowCourses ? (
        <div>
        <CoursesHeader />
        <CoursesContent />
        </div>
      ) : <UploadCalendar /> }
    </PageWrapper>
  )
}