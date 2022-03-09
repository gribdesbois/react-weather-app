import React from 'react'
import moment from 'moment'

const TimeStamp = () => {
  return (
    <div className="flex">
      <p className="day">Day: {moment().format('dddd')}</p>
      <p className="day">Date: {moment().format('LL')} </p>
    </div>
  )
}

export default TimeStamp
