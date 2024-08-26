import "../styles/Defense.css"
import f15 from "../assets/f15.png"
import f18 from "../assets/f18.png"
import apache from "../assets/apache.png"

export const Defense = () => {
  return (
    <section className="defense">
      <h2>Defense Products</h2>
      <div className="defense-item">
        <img src={f15} alt="F-15" className="defense-image" />
        <div className="defense-info">
          <h3>F-15 Eagle</h3>
          <p>The F-15 Eagle is an American twin-engine, all-weather tactical fighter aircraft designed by McDonnell Douglas (now Boeing).</p>
        </div>
      </div>
      <div className="defense-item">
        <img src={f18} alt="F/A-18" className="defense-image" />
        <div className="defense-info">
          <h3>F/A-18 Hornet</h3>
          <p>The F/A-18 Hornet is a twin-engine, supersonic, all-weather, carrier-capable, multirole combat jet, designed as both a fighter and attack aircraft.</p>
        </div>
      </div>
      <div className="defense-item">
        <img src={apache} alt="AH-64 Apache" className="defense-image" />
        <div className="defense-info">
          <h3>AH-64 Apache</h3>
          <p>The Boeing AH-64 Apache is an American twin-turboshaft attack helicopter with a tailwheel-type landing gear arrangement and a tandem cockpit for a two-man crew.</p>
        </div>
      </div>
    </section>
  )
}