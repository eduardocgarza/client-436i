import { useState } from "react"
import ICourse from "../../models/server/ICourse"

export default function useCourses() {
  const [courses, setCourses] = useState<ICourse[]>([])
  return { courses, setCourses }
}