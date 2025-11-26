import {Link} from "react-router-dom"
import errorpage from "./assets/errorpage.gif"

function ErrorPage()
{


    return(
        <>
        <img src={errorpage}></img>
        <button><Link to="/">Home</Link></button>
        </>
    )
}

export default ErrorPage