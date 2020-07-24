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
  const { courses, setCourses } = useAppContext()


  async function fetchCoursesData() {
    const x = await api.request(GetCourseRequest())
    console.log("courses: ", x)
    setCourses({
      ...x.data
    })
  }

  useEffect(() => {
    fetchCoursesData()
  }, [])

  const tempShowCourses = false
  return (
    <PageWrapper>
      <PageHeader text="My Courses" />
      {/* {courses.length > 0 ? ( */}
      {tempShowCourses ? (
        <>
        <CoursesHeader />
        <CoursesContent />
        </>
      ) : null}
      {!tempShowCourses ? (
        <UploadCalendar />
      ) : null}
    </PageWrapper>
  )
}