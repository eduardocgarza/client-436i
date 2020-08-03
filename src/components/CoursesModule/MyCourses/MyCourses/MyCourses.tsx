/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import CoursesContent from "../CoursesContent/CoursesContent"
import CoursesHeader from "../CoursesHeader/CoursesHeader"
import PageHeader from "../../../_Shared/PageHeader/PageHeader"
import { PageWrapper } from "../../../../assets/styles/PageWrapper"
import useAppContext from "../../../../state/context/ApplicationContext"
import UploadCalendar from "../../../AccountModule/UploadCalendar/UploadCalendar"
import { GetCourseRequest } from "../../../../network/NetworkRequests"
import useSessionContext from "../../../../state/context/SessionContext"

export default function MyCourses() {
  const { api } = useSessionContext()
  const { coursesState } = useAppContext()
  const { courses, setCourses } = coursesState

  async function fetchCoursesData() {    
    try {
      const response = await api.request(GetCourseRequest())
      const courseData = response.data.courses
      setCourses([...courseData])
    } 
    catch (error) {
      if (!error.errorClientMessage) {
        console.log(error)
        return
      }
      console.log(error.errorClientMessage)
    }
  }

  useEffect(() => {
    fetchCoursesData()
  }, [])

  console.log("Courses: ", courses)

  return (
    <PageWrapper>
      <PageHeader text="My Courses" />
      {courses.length > 0 ? (
        <>
        <CoursesHeader />
        <CoursesContent />
        </>
      ) : null }
      {courses.length === 0 ? <UploadCalendar /> : null}
    </PageWrapper>
  )
}