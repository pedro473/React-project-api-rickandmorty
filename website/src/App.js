import './App.css';
import '../src/Api'
import {useState, useEffect} from 'react';
import Navbar from './componentes/Navbar'
import Characters from './componentes/Characters';
import * as Api from './Api';
import Pagination from './componentes/Pagination';


function App() {

const [characters, setcharacters] = useState([]);
const [info, setinfo] = useState({})
 
const url ="https://rickandmortyapi.com/api/character"
const fetchApi = (url) =>{

  fetch(url)
  .then(response  => response.json())
  .then(data => {

    setinfo(data.info)
   setcharacters(data.results)}) 
  .catch(error => console.log(error))


}


const onPrevious = () =>{
  fetchApi(info.prev)
}
 

const onNext = () =>{
  fetchApi(info.next)
}
//export default getAllLaunches;


useEffect( () => {
  fetchApi(url)
}, [])

 // const [launches, setlaunches] = useState(['']);


  //  Api.getAllLaunches().then(setlaunches);

  
/*
  return (
     <div className="App">
    <section >
          <div classname='launch-div'>
          {launches.map((character_characters) => (
            <li key={character_characters} >
              {character_characters.name} 
            </li>
          ))}
      </div>
    </section>
    </div>
  );*/

  return(
    <>

      <Navbar brand='Rick and Morty' />

      
      <Pagination prev={info.prev} next={info.next}  onNext={onNext} onPrevious={onPrevious}/>

      <div className='container mt-5'>

       <Characters characters={characters}/>


       <Pagination prev={info.prev} next={info.next}  onNext={onNext} onPrevious={onPrevious}/>
      </div>
      </>
  )
}

export default App;
