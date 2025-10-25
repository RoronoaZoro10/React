import error from './assets/error.jpg'

function Genre({ image = error, genre = "anime genre" })
{
    return(
        <>
        <div id="genres">
        <img src={image}></img>
        <h3>{genre}</h3>
        </div>
        </>
    )
}

export default Genre