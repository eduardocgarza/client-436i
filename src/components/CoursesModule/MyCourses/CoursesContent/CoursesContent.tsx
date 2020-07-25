import React from "react"
import useAppContext from "../../../../state/context/ApplicationContext"
import CourseItem from "../CourseItem/CourseItem"
import { ContentContainer } from "./CoursesContentStyles"

export default function CoursesContent() {
  const { coursesState } = useAppContext()
  const { courses } = coursesState
  return (
    <ContentContainer>
      {courses.length > 0 ? (
        courses.map(course => (
          <CourseItem key={course.courseId} course={course} />
        ))
      ) : null}
    </ContentContainer>
  )
}