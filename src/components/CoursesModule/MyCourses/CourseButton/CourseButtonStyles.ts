import styled from "styled-components"
import { CourseButtonTypes } from "./CourseButtonTypes"

interface CourseButtonProps {
  color: CourseButtonTypes
}

export const CourseButtonContainer = styled.button`
  background: ${(props: CourseButtonProps) => {
    switch(props.color) {
      case CourseButtonTypes.BLUE: {
        return "#3A92E4"
      }
      case CourseButtonTypes.RED: {
        return "#CC000E"
      }
      case CourseButtonTypes.GREEN: {
        return "#0EAD69"
      }
      case CourseButtonTypes.YELLOW: {
        return "#FFC60A"
      }
    }
  }};
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 4px black;
  color: ${(props: CourseButtonProps) => {
    switch(props.color) {
      case CourseButtonTypes.BLUE: {
        return "#FFF"
      }
      case CourseButtonTypes.RED: {
        return "#FFF"
      }
      case CourseButtonTypes.GREEN: {
        return "#FFF"
      }
      case CourseButtonTypes.YELLOW: {
        return "#000"
      }
    }
  }};
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  font-weight: bold;
  margin: 20px;
  height: 135px;
  text-align: center;
  width: 270px;

  &:hover {
    background: ${(props: CourseButtonProps) => {
      switch(props.color) {
        case CourseButtonTypes.BLUE: {
          return "#1B73C5"
        }
        case CourseButtonTypes.RED: {
          return "#B8000C"
        }
        case CourseButtonTypes.GREEN: {
          return "#0B844F"
        }
        case CourseButtonTypes.YELLOW: {
          return "#F5BC00"
        }
      }
    }};
    color: ${(props: CourseButtonProps) => {
      switch(props.color) {
        case CourseButtonTypes.BLUE: {
          return "#FFF"
        }
        case CourseButtonTypes.RED: {
          return "#FFF"
        }
        case CourseButtonTypes.GREEN: {
          return "#FFF"
        }
        case CourseButtonTypes.YELLOW: {
          return "#000"
        }
      }
    }};
  }

  &:focus {
    outline: none;
  }
`