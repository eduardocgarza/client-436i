import React from "react"
import { CourseButtonContainer } from "./CourseButtonStyles"
import { CourseButtonTypes } from "./CourseButtonTypes"

interface CourseButtonProps {
  course: {
    id: number
    courseDept: string
    courseNumber: string
  }
  color: CourseButtonTypes
}

export default function CourseButton(props: CourseButtonProps) {
  const { color, course } = props
  const courseName = `${course.courseDept} ${course.courseNumber}`
  
  return (
    <CourseButtonContainer color={color}>
      {courseName}
    </CourseButtonContainer>
  )
}