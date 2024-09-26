import img from '../images/Logo.svg'

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img src={img} alt="no prop" />
          </li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation
