
import Genre from './Genre'
import action from './assets/action.jpeg'
import romance from './assets/romance.jpeg'
import comedy from './assets/comedy.jpeg'
import { useState,useEffect } from 'react'
import error from './assets/error.jpg'



function GenreList()
{
    let [genre,setGenre] = useState()

    useEffect(()=>{
        fetch("http://localhost:3000/genre")
        .then((response)=> response.json())
        .then((data)=> setGenre(data))
    },[])

    if(!genre)
    {
        return <></>
    }
    
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