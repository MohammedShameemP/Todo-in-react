import React from 'react'
import { Oval } from 'react-loader-spinner'

function Loading() {
  return (
    <div className='d-flex justify-content-center' style={{marginTop:'40vh'}} >
<Oval
  ariaLabel="loading-indicator"
  height={100}
  width={100}
  strokeWidth={5}
  strokeWidthSecondary={1}
  color="blue"
  secondaryColor="white"
/>    </div>
  )
}

export default Loading