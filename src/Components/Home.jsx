import React from 'react'
import Linktags from './Linktags'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Linktags/>
      <Link to="/state">Use state Hook</Link>
    </div>
  )
}
