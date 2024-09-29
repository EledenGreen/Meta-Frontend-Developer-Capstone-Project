import BookingForm from './BookingForm'
import { useEffect, useReducer, useState } from 'react'
import { fetchAPI } from '../utils/api'

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const selectedDate = action.payload
      const availableTimes = fetchAPI(new Date(selectedDate))
      return { ...state, times: availableTimes }
    }
    default:
      return state
  }
}

export const initializeTimes = () => {
  const today = new Date()
  return { times: fetchAPI(today) }
}

const BookingPage = () => {
  const [time, setTime] = useState()
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

  return (
    <>
      <hr />

      <BookingForm
        setTime={setTime}
        availableTimes={availableTimes.times}
        dispatch={dispatch}
      />
    </>
  )
}

export default BookingPage
