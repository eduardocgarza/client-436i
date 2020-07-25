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
  accountId: string
  name: string
}

interface CourseItemProps {
  course: {
    courseId: string
    courseDept: string
    courseNumber: string
    accounts: Student[]
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
          {course.accounts.map(student => (
            <StudentItem 
              key={student.accountId} 
              student={student}
            />
          ))}
        </StudentsContent>
      </StudentsContainer>
    </CourseItemContainer>
  )
}