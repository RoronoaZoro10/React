import { useState } from 'react'
import error from './assets/error.jpg'

function Genre({image = error, name = "anime genre"})
{
    const [selected,select] = useState(false)

    return(
        <>
        <div id="genres">
        <img src={image}></img>
        <h3>{name}</h3>
        <button onClick={() => selected==false? select(true):select(false)}>{selected==false?"Select":"Unselect"}</button>
        <p>{selected?"it's selected":"it's not selected"}</p>
        </div>
        </>
    )
}

export default Genre