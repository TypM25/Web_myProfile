
import Navbar  from '../components/Navbar'
import Experiencebox from '../components/Experiencebox'

const events = [
  {
    pathImage1: "./image/wpf1.jpg",
    pathImage2: "./image/wpf2.jpg",
    pathImage3: "./image/wpf3.jpg",
    pathImage4: "./image/xbot1.jpg",
    pathImage5: "./image/xbot2.jpg",
    pathImage6: "./image/shopeeweb.jpg",
    pathImage7: "./image/scienceday.jpg",
    pathImage8: "./image/jcamp3.jpg",
    pathImage9: "./image/jcamp1.jpg",
    title1: "Windows Presentation Foundation (WPF)",
    describe1: "Final Project (In progress)",
    title2: "1 in 3 Ted Fund Youth Stratup (XBOT Team)",
    describe2: "Design and edit code about robot movement.",
    title3: "Shopee Website",
    describe3: "Using HTML, JavaScript, CSS, React. (In progress)",
    title4: "Science Day",
    describe4: "Do activities and take the juniors to play games.",
    title5: "J Knowledge Camp",
    describe5: "Be a Computer Engineer staff and suggest about Line Follower Robot."
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