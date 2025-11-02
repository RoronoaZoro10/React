
import Genre from './Genre'
import action from './assets/action.jpeg'
import romance from './assets/romance.jpeg'
import comedy from './assets/comedy.jpeg'
import { useState } from 'react'
import error from './assets/error.jpg'



function GenreList()
{
    let [genre,setGenre] = useState([{id : 1, name : "Action", image : action},
        {id : 2, name : "Romance", image : romance},
        {id : 3, name : "Comedy", image : comedy},
        {id : 4},
        {id : 5, name : "Adventure"}
    ])

    function deleteGenre(id)
    {
        let newGenre = genre.filter((genrel)=> genrel.id != id)
        setGenre(newGenre)
    }    


    let genrelist = genre.map((g) => <Genre key={g.id} id={g.id} name={g.name} image={g.image} deleteGenre={deleteGenre}/>)

    return (
        <>
        {genrelist}
        </>
    )

}

export default GenreList