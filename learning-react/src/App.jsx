import './App.css'
import Genre from './Genre'
import PageFooter1 from './Pagefooter'
import action from './assets/action.jpeg'
import romance from './assets/romance.jpeg'
import comedy from './assets/comedy.jpeg'
import sliceoflife from './assets/sliceoflife.jpeg'
function App() {
  return (
    <>
     <h1>Welcome to the anime world</h1>
     <Genre genre="Action" image={action}/>
     <Genre genre="Romance" image={romance}/>
     <Genre genre="Comedy" image={comedy}/>
     <Genre genre="Slice of life" image={sliceoflife}/>
     <Genre genre="senien"/>
     <Genre genre="Adventure"/>
     <Genre/>
     <Genre/>
     <PageFooter1/>
    </>
  )
}

export default App
