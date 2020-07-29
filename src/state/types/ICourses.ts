import ICourse from "../../models/server/ICourse"

export default interface ICoursesState {
  courses: ICourse[]
  setCourses: (c: ICourse[]) => void
}