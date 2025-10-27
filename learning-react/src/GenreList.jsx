
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

genre.sort((n1,n2)=> (n1.name ?? "").localeCompare(n2.name))

function GenreList()
{
    let genrelist = genre.map((g,index) => <Genre key={index} name={g.name} image={g.image}/>)  

    return (
        <>
        {genrelist}
        </>
    )

}

export default GenreList