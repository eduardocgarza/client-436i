interface IArtist {
  artistId: string
  name: string
  url: string
  profileURL: string
}

interface ICourse {
  courseId: string
  courseNumber: string
  courseDept: string
  courseSection: string
}

interface ILike {
  likeId: string
  name: string
}

interface ITrack {
  trackId: string
  name: string
  url: string
  profileURL: string
}


export default interface IStudent {
  accountId: string
  name: string
  profileURL: string,
  commonArtists: IArtist[],
  commonCourses: ICourse[],
  commonLikes: ILike[],
  commonTracks: ITrack[]
}