import React from 'react'
import Handleclick, { name, email, student, course } from './export'  //import the exported variables
export default function Modules() {
    return (
        <div>
            <h2>Modules</h2>
            {name} <br />
            {email} <br />
            {student.name} <br />
            {student.cla} <br />
            {course.cla} <br />
            {course.name} <br />
            <Handleclick />   {/* Default export component import */}
        </div>
    )
}
