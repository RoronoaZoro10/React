
import Genre from './Genre'
import load from './assets/loading_gif1.gif'
import useFetch from './useFetch'
import { Link } from 'react-router-dom'



function GenreList()
{
    const [genre,setGenre] = useFetch('http://localhost:3000/genre')

    // useEffect(()=>{
    //     fetch("http://localhost:3000/genre")
    //     .then((response)=> response.json())
    //     .then((data)=> setGenre(data))
    // },[])

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
        <h1>Welcome to the anime world</h1>

        {genrelist}

        <button><Link to="/NameList">Heros</Link></button>
        </>
    )

}

export default GenreList