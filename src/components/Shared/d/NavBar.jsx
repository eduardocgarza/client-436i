import React from "react"
import "../style/NavBar.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function NavBar() {
  const isLogged = useSelector((state) => state.isLogged)
  return (
    <nav>
      <ul className="navbar">
        {isLogged ? (
          <Link to="/profile">
            <li>Profile</li>
          </Link>
        ) : (
          ""
        )}
        {!isLogged ? (
          <Link to="/signup">
            <li>Sign-Up</li>
          </Link>
        ) : (
          ""
        )}
        {!isLogged ? (
          <Link to="/login">
            <li>Log-in</li>
          </Link>
        ) : (
          ""
        )}
      </ul>
    </nav>
  )
}
