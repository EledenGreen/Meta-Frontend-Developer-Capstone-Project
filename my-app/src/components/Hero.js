import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section class="hero">
        <div class="hero-content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned restaurant focused on organic and quality
            products and dishes.
          </p>
          <Link to="/BookingPage">
            <button class="btn">Reserve a table</button>
          </Link>
        </div>
        <img src="hero-img.jpg" alt="hero img" />
      </section>
    </>
  )
}

export default Hero
