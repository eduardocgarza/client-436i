import React from "react"
import CoursesContent from "../CoursesContent/CoursesContent"
import CoursesHeader from "../CoursesHeader/CoursesHeader"
import PageHeader from "../../../_Shared/PageHeader/PageHeader"
import { PageWrapper } from "../../../../assets/styles/PageWrapper"
import useAppContext from "../../../../state/context/ApplicationContext"
import UploadCalendar from "../../../AccountModule/UploadCalendar/UploadCalendar"

export default function MyCourses() {
  const { courses } = useAppContext()
  const tempShowCourses = true
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