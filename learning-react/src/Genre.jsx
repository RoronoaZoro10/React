import { useState } from 'react'
import error from './assets/error.jpg'
import { Link,useNavigate } from 'react-router-dom'

function Genre(props)
{
    const navigate = useNavigate() 

    const [selected,select] = useState(false)
    
    return(
        <>
        <div id="genres" onClick={()=>navigate("/desc")}>
        <img src={props.image ?? error}></img>
        <h3>{props.name ?? "Anime genre"}</h3>
        <button onClick={()=>select(!selected)}>{selected?"Unselect":"Select"}</button>
        <button onClick={()=>props.deleteGenre(props.id)}>Delete</button>
        <p>{selected?"it's selected":"it's not selected"}</p>
        </div>
        </>
    )
}

export default Genre