import "../styles/Airplanes.css"
import boeing737 from "../assets/737.png"
import boeing747 from "../assets/747.png"
import boeing787 from "../assets/787.png"

export const Airplanes = () => {
  return (
    <section className="airplanes">
      <h2>Airplanes</h2>
      <div className="airplane">
        <img src={boeing737} alt="Boeing 737" className="airplane-image" />
        <div className="airplane-info">
          <h3>Boeing 737</h3>
          <p>The Boeing 737 is a short- to medium-range twinjet narrow-body airliner developed and manufactured by Boeing Commercial Airplanes.</p>
        </div>
      </div>
      <div className="airplane">
        <img src={boeing747} alt="Boeing 747" className="airplane-image" />
        <div className="airplane-info">
          <h3>Boeing 747</h3>
          <p>The Boeing 747 is an American wide-body commercial jet airliner and cargo aircraft, often referred to by its original nickname, "Jumbo Jet".</p>
        </div>
      </div>
      <div className="airplane">
        <img src={boeing787} alt="Boeing 787" className="airplane-image" />
        <div className="airplane-info">
          <h3>Boeing 787</h3>
          <p>The Boeing 787 Dreamliner is an American wide-body jet airliner manufactured by Boeing Commercial Airplanes.</p>
        </div>
      </div>
    </section>
  )
}