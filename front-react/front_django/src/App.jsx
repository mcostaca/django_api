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
  const [dados, setDados] = useState([])

  useEffect(()=>{
    async function postapi(){
      await axios.post('http://127.0.0.1:8000/api',{
        name:"Item #6"
      })
    }


    async function apifetch() {
    
      await axios.get('http://127.0.0.1:8000/api').then(res => {
        setDados(res.data)
  
      })
      
    }
    apifetch()
    postapi()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {console.log(dados)}
        {dados.map((el,index)=>(
          <p key={index}>{el.name}</p>
        ))}
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
