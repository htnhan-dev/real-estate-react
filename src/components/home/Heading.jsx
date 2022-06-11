import React from 'react'

const Heading = ({ title, subtile }) => {
  return (
    <div>
        <>
            <div className="heading">
                <h1>{title}</h1>
                <p>{subtile}</p>
            </div>
        </>
    </div>
  )
}

export default Heading