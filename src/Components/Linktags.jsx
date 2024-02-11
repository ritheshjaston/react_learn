import React from 'react'
import { Link } from 'react-router-dom'
export default function Linktags() {
  return (
    <div>
      <h2>Link</h2>
      <Link to='/Arrowfunction'>Arrow</Link><br />
      <Link to='/Array'>ArrayMethod</Link><br />
      <Link to='/table'>Task 03</Link><br />
      <Link to='/dark'>Task 03 Darklight</Link>
    </div>
  )
}
