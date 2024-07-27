
import Navbar  from '../components/Navbar'
import Experiencebox from '../components/Experiencebox'

const events = [
  {
    pathImage1: "./image/jcamp1.jpg",
    pathImage2: "./image/jcamp2.jpg",
    title: "J - Knownledge Campp",
    describe: "Be Computer Engineer Staff"
  }
]


function Experience() {
  const eventElements = events.map((event, index) => {
    return <Experiencebox key={index} event={event} />;
  })
  
  return (
    <div>
        <Navbar/>
        <div>
          <div>
          {eventElements}
          </div>
        </div>
    </div>
  )
}

export default Experience