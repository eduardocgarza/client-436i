import React, { useState } from "react"
import { Link } from "react-router-dom"
import IStudent from "../../../models/server/IStudent"
import blankProfilePic from "../../../assets/images/blank_fb_pic.jpg"
import {
  StudentItemContainer,
  StudentItemButton,
  StudentImage,
  StudentName,
  StudentDetails,
  DetailsContainer,
  DetailsHeader,
  DetailsContent,
  DetailsItem,
} from "./StudentItemStyles"

interface StudentItemProps {
  student: IStudent
}

export default function StudentItem(props: StudentItemProps) {
  const { commonArtists, commonCourses, commonLikes, commonTracks } = props.student
  const [toggleOpen, setToggleOpen] = useState(false)
  function handleToggle() {
    setToggleOpen(!toggleOpen)
  }
  return (
    <StudentItemContainer>
      <StudentItemButton onClick={handleToggle}>
        <StudentImage 
          src={props.student.profileURL? props.student.profileURL: blankProfilePic}
        />
        <StudentName>{props.student.name}</StudentName>
      </StudentItemButton>
      {toggleOpen ? (
        <StudentDetails>
          {/* Arists */}
          {commonArtists.length > 0 ? (
            <DetailsContainer>
              <DetailsHeader>Artists in Common</DetailsHeader>
              <DetailsContent>
                {commonArtists.map((artist, index) => (
                  <a className="d-flex" key={artist.artistId} href={artist.url}>
                    <DetailsItem>{artist.name}</DetailsItem>
                    {(index !== commonArtists.length - 1) ? <span style={{marginRight: 4 }}>,</span> : null}
                  </a>
                ))}
              </DetailsContent>
            </DetailsContainer>
          ) : null}
          {/* Courses */}
          {commonCourses.length > 0 ? (
            <DetailsContainer>
              <DetailsHeader>Courses in Common</DetailsHeader>
              <DetailsContent>
                {commonCourses.map((course, index) => (
                  <div className="d-flex" key={course.courseId}>
                    <DetailsItem>{`${course.courseDept} ${course.courseNumber}`}</DetailsItem>
                    {(index !== commonCourses.length - 1) ? <span style={{marginRight: 4 }}>,</span> : null}
                  </div>
                ))}
              </DetailsContent>
            </DetailsContainer>
          ) : null}
          {/* Likes */}
          {commonLikes.length > 0 ? (
            <DetailsContainer>
              <DetailsHeader>Likes in Common</DetailsHeader>
              <DetailsContent>
                {commonLikes.map((like, index) => (
                  <div className="d-flex" key={like.likeId}>
                    <DetailsItem key={like.likeId}>{like.name}</DetailsItem>
                    {(index !== commonLikes.length - 1) ? <span style={{marginRight: 4 }}>,</span> : null}
                  </div>
                ))}
              </DetailsContent>
            </DetailsContainer>
          ) : null}
          {/* Tracks */}
          {commonTracks.length > 0 ? (
            <DetailsContainer>
              <DetailsHeader>Tracks in Common</DetailsHeader>
              <DetailsContent>
                {commonTracks.map((track, index) => (
                  <a className="d-flex" key={track.trackId} href={track.url}>
                    <DetailsItem>{track.name}</DetailsItem>
                    {(index !== commonTracks.length - 1) ? <span style={{marginRight: 4 }}>,</span> : null}
                  </a>
                ))}
              </DetailsContent>
            </DetailsContainer>
          ) : null}
          <Link className="btn btn-primary" to={`/profile/${props.student.accountId}`}>Visit profile</Link>
        </StudentDetails>
      ) : null}
    </StudentItemContainer>
  )
}
