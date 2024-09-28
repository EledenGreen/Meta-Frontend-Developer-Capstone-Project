import { useState } from 'react'

const BookingForm = () => {
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [guest, setGuest] = useState()
  const [occasion, setOccassion] = useState()

  return (
    <>
      <form class="bookingForm">
        <h1>Booking</h1>
        <label for="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          onChange={(e) => setDate(e.target.value)}
        />
        <label for="res-time">Choose time</label>
        <select id="res-time " onChange={(e) => setTime(e.target.value)}>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label for="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) => setGuest(e.target.value)}
        />
        <label for="occasion">Occasion</label>
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
