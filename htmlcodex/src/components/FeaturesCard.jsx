import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faCode ,faFile } from '@fortawesome/free-solid-svg-icons'

const FeaturesCard = (props) => {
  return (
    <div className='flex py-5 justify-between'>
      <div className='flex items-center w-92 h-70 bg-white rounded-xl shadow-lg py-7 px-4 flex-col text-center justify-between '>
        <FontAwesomeIcon icon={faGear} size="5x" className="text-blue-600 mb-3"/>
        <h2>Highly Customizable</h2>
        <p >Our HTML website templates are highly customizable and very easy to use. You can easily customize and edit as your need.</p>
      </div>
      <div className='flex items-center w-92 h-70 bg-white rounded-xl shadow-lg py-7 px-4 flex-col text-center justify-between '>
        <FontAwesomeIcon icon={faCode} size="5x" className="text-blue-600 mb-3"/>
        <h2>Highly Customizable</h2>
        <p >Our HTML website templates are highly customizable and very easy to use. You can easily customize and edit as your need.</p>
      </div>
      <div className='flex items-center w-92 h-70 bg-white rounded-xl shadow-lg py-7 px-4 flex-col text-center justify-between '>
        <FontAwesomeIcon icon={faFile} size="5x" className="text-blue-600 mb-3"/>
        <h2>Highly Customizable</h2>
        <p >Our HTML website templates are highly customizable and very easy to use. You can easily customize and edit as your need.</p>
      </div>
      

    </div>
  )
}

export default FeaturesCard
