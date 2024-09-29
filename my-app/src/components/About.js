import aboutimg from '../images/restaurant1.jpg'
const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>The best restaurant in Chicago, serving the best dishes.</p>
        </div>
        <img src={aboutimg} alt="collage" />
      </section>
    </>
  )
}

export default About
