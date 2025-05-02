import Courses from "./components/Courses"
import Navbar from "./components/Navbar"
import Review from "./components/Review"
import Accordion from './components/Accordion'
import Footer from "./components/Footer"
import AiCoach from "./components/AI"

function App(){
  return(
    <div>
      <Navbar/>
      <AiCoach/>
      <Courses/>
      <Accordion/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App
