import React from "react"
import CoursesContent from "../CoursesContent/CoursesContent"
import CoursesHeader from "../CoursesHeader/CoursesHeader"
import PageHeader from "../../../_Shared/PageHeader/PageHeader"
import { PageWrapper } from "../../../../assets/styles/PageWrapper"

export default function MyCourses() {
  return (
    <PageWrapper>
      <PageHeader text="My Courses" />
      <CoursesHeader />
      <CoursesContent />
    </PageWrapper>
  )
}