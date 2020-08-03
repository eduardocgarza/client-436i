import IStudent from "./IStudent";

export default interface ICourse {
  courseId: string
  courseDept: string
  courseNumber: string
  courseSection: string
  students: IStudent[]
}