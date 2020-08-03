import React from "react"
import ICourse from "../../../../models/server/ICourse"
import StudentItem from "../../../_Shared/StudentItem/StudentItem"
import {
  CourseItemContainer,
  CourseItemHeader,
  StudentsContainer,
  StudentsHeader,
  StudentsContent,
} from "./CourseItemStyles"

interface CourseItemProps {
  course: ICourse
}

export default function CourseItem(props: CourseItemProps) {
  const { course } = props
  const courseName = `${course.courseDept} ${course.courseNumber} ${course.courseSection}`
  return (
    <CourseItemContainer>
      <CourseItemHeader>{courseName}</CourseItemHeader>
      <StudentsContainer>
        <StudentsHeader>Classmates</StudentsHeader>
        <StudentsContent>
          {course.students.map(student => (
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