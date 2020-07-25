import { useState } from "react"
import { coursesTestData } from "../data/coursesTestData"
import { ICourse } from "../types/ICourses"

export default function useCourses() {
  const [courses, setCourses] = useState<ICourse[]>([])
  return { courses, setCourses }
}