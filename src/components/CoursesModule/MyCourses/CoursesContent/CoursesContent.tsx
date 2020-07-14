import React from "react"
import useAppContext from "../../../../state/context/ApplicationContext"
import CourseItem from "../CourseItem/CourseItem"
import { ContentContainer } from "./CoursesContentStyles"

export default function CoursesContent() {
  const { courses } = useAppContext()
  return (
    <ContentContainer>
      {courses.map(course => (
        <CourseItem key={course.id} course={course} />
      ))}
    </ContentContainer>
  )
}