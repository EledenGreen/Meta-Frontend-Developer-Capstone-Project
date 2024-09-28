import BookingForm from './BookingForm'
import { useReducer, useState } from 'react'

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return state
    default:
      return state
  }
}

export const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
}

const BookingPage = () => {
  const [time, setTime] = useState()
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

  return (
    <>
      <hr />

      <BookingForm
        setTime={setTime}
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </>
  )
}

export default BookingPage
