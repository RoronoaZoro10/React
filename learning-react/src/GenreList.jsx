
import Genre from './Genre'
import { useState,useEffect } from 'react'
import load from './assets/loading_gif1.gif'



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
        return (
            <img src={load}></img>
        )
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