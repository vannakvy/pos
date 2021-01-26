import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = ({w=100,h=100}) => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: `${w}px`,
        height: `${h}px`,
        margin: 'auto',
        display: 'block',
      }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader
