import React from "react"
import StudentItem from "../../../_Shared/StudentItem/StudentItem"
import {
  CourseItemContainer,
  CourseItemHeader,
  StudentsContainer,
  StudentsHeader,
  StudentsContent,
} from "./CourseItemStyles"

interface Student {
  id: number
  name: string
}

interface CourseItemProps {
  course: {
    id: number
    courseDept: string
    courseNumber: string
    students: Student[]
  }
}

export default function CourseItem(props: CourseItemProps) {
  const { course } = props
  const courseName = `${course.courseDept} ${course.courseNumber}`
  return (
    <CourseItemContainer>
      <CourseItemHeader>{courseName}</CourseItemHeader>
      <StudentsContainer>
        <StudentsHeader>Classmates</StudentsHeader>
        <StudentsContent>
          {course.students.map(student => (
            <StudentItem 
              key={student.id} 
              student={student}
            />
          ))}
        </StudentsContent>
      </StudentsContainer>
    </CourseItemContainer>
  )
}