import error from './assets/error.jpg'

function Genre({image = error, name = "anime genre"})
{
    function selected()
    {
        console.log("This genre is selected by",name)
    }

    return(
        <>
        <div id="genres">
        <img src={image}></img>
        <h3>{name}</h3>
        <button onClick={selected}>Select</button>
        </div>
        </>
    )
}

export default Genre