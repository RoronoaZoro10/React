
import Genre from './Genre'
import action from './assets/action.jpeg'
import romance from './assets/romance.jpeg'
import comedy from './assets/comedy.jpeg'
import error from './assets/error.jpg'



let genre = [{name : "Action", image : action},
    {name : "Romance", image : romance},
    {name : "Comedy", image : comedy},
    {},
    {name : "Adventure"}
]

function GenreList()
{
    let genrelist = genre.map((g) => <Genre name={g.name} image={g.image}/>)  

    return (
        <>
        {genrelist}
        </>
    )

}

export default GenreList