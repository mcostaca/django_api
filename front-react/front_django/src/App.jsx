import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function App() {
  /*let resp = async function fetchh(){
    await fetch('http://127.0.0.1:8000/api?format=json').then(response => response.json()).then(data =>{const info = data})
  }
  resp
  */
  const [value,setValue] = useState('')
  const [dados, setDados] = useState([])
  const [refatch,setRefatch] = useState(false)
  const [post,setPost] = useState({})

  useEffect(()=>{


    async function apifetch() {
      
      const response = await axios.get('http://127.0.0.1:8000/api')
      console.log(response)
      setDados(response.data)
    }
    apifetch()
  },[refatch])
  async function handleSubmite(e){
    await setPost({
      "name":"Item #21"
      })
    e.preventDefault()

    await axios.post('http://127.0.0.1:8000/api',post)
    setRefatch(!refatch)

  }
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
        {dados.map((el,index)=>(
          <p key={index}>{el.name}</p>
        ))}
        </p>
        <form onSubmit={handleSubmite}>
          <input type='text'  value={value} 
          onChange={e => setValue(e.target.value)}/>
          <button type='submit'>
            Enviar
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
