import "../styles/Principal.css"
import boeingJet from "../assets/Logo-Boeing.png"

export const Principal = () => {
  return (
    <section className="principal">
      <h2>About Boeing</h2>
      <img src={boeingJet} alt="Boeing Jet" className="boeing-image" />
      <p>Boeing is one of the largest aerospace companies in the world, known for its commercial airplanes, defense products, and space systems.</p>
      <p>Founded in 1916, Boeing has a rich history of innovation and leadership in the aerospace industry.</p>
    </section>
  )
}