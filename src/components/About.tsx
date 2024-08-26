import "../styles/About.css"
import boeingLogo from "../assets/Logo-Boeing.png"

export const About = () => {
  return (
    <section className="about">
      <h2>About Boeing</h2>
      <div className="about-content">
        <img src={boeingLogo} alt="Boeing Logo" className="about-image" />
        <div className="about-info">
          <p>Boeing is one of the largest aerospace companies in the world, known for its commercial airplanes, defense products, and space systems.</p>
          <p>Founded in 1916, Boeing has a rich history of innovation and leadership in the aerospace industry.</p>
          <p>With a commitment to quality and safety, Boeing continues to push the boundaries of technology and engineering to create the next generation of aerospace solutions.</p>
        </div>
      </div>
    </section>
  )
}