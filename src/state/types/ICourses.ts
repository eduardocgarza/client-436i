import IStudent from "./IStudent"

export interface ICourse {
  courseId: string
  courseDept: string
  courseNumber: string
  accounts: IStudent[]
}

export default interface ICoursesState {
  courses: ICourse[]
  setCourses: (c: ICourse[]) => void
}