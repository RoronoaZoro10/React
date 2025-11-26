import useFetch from "./useFetch"
import Name from "./Name"
import { Link } from "react-router-dom"


function NameList()
{
    const [name,setName] = useFetch("http://localhost:3001/names")

    if(!name)
    {
      return <></>
    }

    const nameList = name.map((n,index)=><Name key={index} hero={n.hero} show={n.show}/>)
    name.map((n,index)=>console.log(n.hero+" in "+n.show))

    return(
        <>
        <h1>Welcome to the anime world</h1>

          {nameList}  
        <button><Link to="/">Home</Link></button>
        </>
    )

}

export default NameList