import React from "react"
import { Link } from "react-router-dom"

export default function Error() {
  return (
    <div>
      <h1>Error</h1>
      <p>Page not found</p>
      <Link to={"/"}>To Home</Link>
    </div>
  )
}
