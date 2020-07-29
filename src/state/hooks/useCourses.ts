import { useState } from "react"
import { ICourse } from "../types/ICourses"

export default function useCourses() {
  const [courses, setCourses] = useState<ICourse[]>([])
  return { courses, setCourses }
}