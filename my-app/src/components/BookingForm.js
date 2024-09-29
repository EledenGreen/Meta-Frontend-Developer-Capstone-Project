import { useState } from 'react'

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [time, setTime] = useState()
  const [date, setDate] = useState()
  const [guest, setGuest] = useState()
  const [occasion, setOccassion] = useState()

  const handleDateChange = (event) => {
    const selectedDate = event.target.value
    setDate(selectedDate)
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate })
  }

  return (
    <>
      <form
        className="bookingForm"
        onSubmit={(e) => {
          e.preventDefault()
          submitForm(time, date, guest, occasion)
        }}
      >
        <h1>Booking</h1>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={handleDateChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) => setGuest(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e) => setOccassion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  )
}

export default BookingForm
