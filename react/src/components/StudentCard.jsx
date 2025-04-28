import React from 'react'

const StudentCard = ({data}) => {
  return (
    <div>
      <h3>{data.name}</h3>
      <p>age: {data.age}</p>
      <p>email: {data.email}</p>
    </div>
  )
}

export default StudentCard
