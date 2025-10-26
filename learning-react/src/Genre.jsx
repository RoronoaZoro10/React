import error from './assets/error.jpg'

function Genre({image = error, name = "anime genre"})
{
    return(
        <>
        <div id="genres">
        <img src={image}></img>
        <h3>{name}</h3>
        </div>
        </>
    )
}

export default Genre