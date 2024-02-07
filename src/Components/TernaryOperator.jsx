import React from 'react'

export default function TernaryOperator() {
    const a=10;
    const b='10';
    {a>b?console.log(true):console.log(false)}
    {a<b?console.log(true):console.log(false)}
    {a==b?console.log(true):console.log(false)}
    {a===b?console.log(true):console.log(false)}
  return (
    <div>
      <h2>TernaryOperator</h2>
    </div>
  )
}
