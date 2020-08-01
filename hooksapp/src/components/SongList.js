import React, {useState, useEffect}  from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
   const[songs, setSong] = useState([
        {title:'almost home', id: 1},
        {title:'memory gospel', id: 2},
        {title:'the wild darkness', id: 3}
    ]);

    const [age, setAge] =useState(20)

    const addSong = (title)=>{
        setSong([...songs, { title:title, id:uuidv4()}])
    }

    useEffect(()=>{
        console.log('use effect run', songs)
    }, [songs])

    useEffect(()=>{
        console.log('use effect run', age)
    }, [age])
    return ( 
        <div className="song_list">
            <ul>
                {songs.map(song =>{
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
           <NewSongForm addSong={addSong}/>
           <button onClick={()=> setAge(age + 1 )}> Add 1 to age: {age}</button>
        </div>
     );
}
 
export default SongList;