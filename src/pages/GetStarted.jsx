import React from 'react'
import {Navbar} from '../components/common/index.js'
import {Introduction} from '../components/getstarted/index.js'

const GetStarted = () => {
  return (
    <div className='overflow-clip w-full bg-white  '>
      <Navbar/>
      <Introduction/>
    </div>
  )
}

export default GetStarted
