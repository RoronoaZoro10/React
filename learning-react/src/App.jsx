import { useState } from 'react'
import './App.css'
import Action from './action'
import PageFooter1 from './pagefooter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Action/>
     <PageFooter1/>
    </>
  )
}

export default App
