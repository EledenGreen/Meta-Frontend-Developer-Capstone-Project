import { render, screen } from '@testing-library/react'
import BookingForm from '../components/BookingForm'
import { initializeTimes } from '../components/BookingPage'
import { updateTimes } from '../components/BookingPage'

test('Renders the BookingForm heading', () => {
  render(<BookingForm />)
  const headingElement = screen.getByText('Booking')
  expect(headingElement).toBeInTheDocument()
})

test('reducer initialized values', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

  const result = initializeTimes()

  expect(result).toEqual(expectedTimes)
})

test('updateTimes return value', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

  const action = { type: 'UPDATE_TIMES' }

  const newState = updateTimes(initialState, action)

  expect(newState).toBe(initialState)
})
