import Services from "../view/Services"
import HeroImage from "../view/HeroImage"
import About from "../view/About"
import Contact from "../view/Contact"

function Main() {
  return (
    <main>
      <HeroImage />
      <div className="py-4 px-20 flex flex-col gap-24">
        <Services />
        <About />
        <Contact />
      </div>
    </main>
  )
}

export default Main