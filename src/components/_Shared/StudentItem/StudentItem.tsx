import React, { useState } from "react"
import { Link } from "react-router-dom"
import IStudent from "../../../state/types/IStudent"
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

const tempArray = ["A", "B", "C", "D", "D"]

export default function StudentItem(props: StudentItemProps) {
  const [toggleOpen, setToggleOpen] = useState(false)
  function handleToggle() {
    setToggleOpen(!toggleOpen)
  }
  return (
    <StudentItemContainer>
      <StudentItemButton onClick={handleToggle}>
        <StudentImage src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d8bd74018444200084e889c%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1339%26cropX2%3D3743%26cropY1%3D554%26cropY2%3D2956" />
        <StudentName>{props.student.name}</StudentName>
      </StudentItemButton>
      {toggleOpen ? (
        <StudentDetails>
          {/* Arists */}
          <DetailsContainer>
            <DetailsHeader>Artists in Common</DetailsHeader>
            <DetailsContent>
              {tempArray.map((item, index) => (
                <>
                  <DetailsItem key={item}>{item}</DetailsItem>
                  {index !== tempArray.length - 1 ? (
                    <span style={{ marginRight: 4 }}>,</span>
                  ) : null}
                </>
              ))}
            </DetailsContent>
          </DetailsContainer>
          {/* Courses */}
          <DetailsContainer>
            <DetailsHeader>Courses in Common</DetailsHeader>
            <DetailsContent>
              {tempArray.map((item, index) => (
                <>
                  <DetailsItem key={item}>{item}</DetailsItem>
                  {index !== tempArray.length - 1 ? (
                    <span style={{ marginRight: 4 }}>,</span>
                  ) : null}
                </>
              ))}
            </DetailsContent>
          </DetailsContainer>
          {/* Likes */}
          <DetailsContainer>
            <DetailsHeader>Likes in Common</DetailsHeader>
            <DetailsContent>
              {tempArray.map((item, index) => (
                <>
                  <DetailsItem key={item}>{item}</DetailsItem>
                  {index !== tempArray.length - 1 ? (
                    <span style={{ marginRight: 4 }}>,</span>
                  ) : null}
                </>
              ))}
            </DetailsContent>
          </DetailsContainer>
          {/* Tracks */}
          <DetailsContainer>
            <DetailsHeader>Tracks in Common</DetailsHeader>
            <DetailsContent>
              {tempArray.map((item, index) => (
                <>
                  <DetailsItem key={item}>{item}</DetailsItem>
                  {index !== tempArray.length - 1 ? (
                    <span style={{ marginRight: 4 }}>,</span>
                  ) : null}
                </>
              ))}
            </DetailsContent>
          </DetailsContainer>
          <Link
            className="btn btn-primary"
            to={"/profile/" + props.student.accountId}
          >
            Visit profile
          </Link>
        </StudentDetails>
      ) : null}
    </StudentItemContainer>
  )
}
