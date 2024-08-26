import "../styles/Space.css"
import starliner from "../assets/starliner.png"
import sls from "../assets/sls.png"
import x37b from "../assets/x37b.jpg"

export const Space = () => {
  return (
    <section className="space">
      <h2>Space Products</h2>
      <div className="space-item">
        <img src={starliner} alt="CST-100 Starliner" className="space-image" />
        <div className="space-info">
          <h3>CST-100 Starliner</h3>
          <p>The CST-100 Starliner is a class of reusable crew capsules expected to transport crew to the International Space Station (ISS) and other low-Earth orbit destinations.</p>
        </div>
      </div>
      <div className="space-item">
        <img src={sls} alt="Space Launch System" className="space-image" />
        <div className="space-info">
          <h3>Space Launch System (SLS)</h3>
          <p>The Space Launch System (SLS) is an American super heavy-lift expendable launch vehicle, which is under development as of 2021.</p>
        </div>
      </div>
      <div className="space-item">
        <img src={x37b} alt="X-37B" className="space-image" />
        <div className="space-info">
          <h3>X-37B</h3>
          <p>The Boeing X-37B is an American unmanned spaceplane that is boosted into space by a launch vehicle, then re-enters Earth's atmosphere and lands as a spaceplane.</p>
        </div>
      </div>
    </section>
  )
}