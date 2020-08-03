import React from "react"
import ICourse from "../../../../models/server/ICourse"
import { CourseButtonContainer } from "./CourseButtonStyles"
import { CourseButtonTypes } from "./CourseButtonTypes"

interface CourseButtonProps {
  course: ICourse
  color: CourseButtonTypes
}

export default function CourseButton(props: CourseButtonProps) {
  const { color, course } = props
  const courseName = `${course.courseDept} ${course.courseNumber} ${course.courseSection}`
  
  return (
    <CourseButtonContainer color={color}>
      {courseName}
    </CourseButtonContainer>
  )
}