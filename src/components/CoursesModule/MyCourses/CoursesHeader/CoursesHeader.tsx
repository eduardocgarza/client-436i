import React from "react"
import useAppContext from "../../../../state/context/ApplicationContext"
import CourseButton from "../CourseButton/CourseButton"
import { CourseButtonTypes } from "../CourseButton/CourseButtonTypes"
import {
  HeaderContainer,
  HeaderContent,
} from "./CoursesHeaderStyles"

export default function CoursesHeader() {
  const { courses } = useAppContext()
  return (
    <HeaderContainer>
      <HeaderContent>
        {courses.map((course, index) => {
          let color = null
          if(index % 4 === 0) {
            color = CourseButtonTypes.BLUE
          } else if (index % 4 === 1) {
            color = CourseButtonTypes.GREEN
          } else if (index % 4 === 2) {
            color = CourseButtonTypes.RED
          } else {
            color = CourseButtonTypes.YELLOW
          }
          return <CourseButton key={course.courseId} course={course} color={color} />
        })}
      </HeaderContent>
    </HeaderContainer>
  )
}