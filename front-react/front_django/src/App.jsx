import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Delete from './components/delete';
import Update from './components/update';


function App() {
  
  
  const [value,setValue] = useState('')
  const [dados, setDados] = useState([])
  const [refatch,setRefatch] = useState(false)
  const [post,setPost] = useState({})


  useEffect(()=>{


    async function apifetch() {
      
      const response = await axios.get('http://127.0.0.1:8000/api/data')
      setDados(response.data)
    }
    apifetch()
  },[refatch])
  useEffect(()=>{
    setPost({
      name:value
    })
  },[value])

  async function handleSubmit(e){

    e.preventDefault()
    await axios.post('http://127.0.0.1:8000/api/data',post)
    setRefatch(!refatch)
  }


  return (
    <div className='bg-gray-900	'>
    <div className='w-screen h-screen gap-96 items-center flex justify-center'>
      <div className=''>
        <table className='table-auto  text-slate-50'>
        <thead className=''>
          <tr>
            <th className='text-left px-8 py-4'>Id</th>
            <th className='text-left px-8 py-4'>Name</th>
            <th className='text-left px-8 py-4'>Created at</th>
          </tr>
        </thead>
            {dados.map((el,index)=>(
              <tr className=' px-8 py-4 border-y' key={index}>
                <td className='px-8 py-4'>{el.id}</td>
                <td className='px-8 py-4'>{el.name}</td>
                <td className='px-8 py-4'>{el.created}</td>
              <div className='gap-1 flex'>
              <Delete link={el.id}/>
              <Update name='MatheusUPDATED' link={el.id}/>
              </div>
              </tr>
            ))}
        </table>
        
      </div>
      <div className="justify-center items-center">
          
          <form className='space-y-3' onSubmit={handleSubmit}>
          <label className=' text-white'>Registre o valor</label>
            <input type="text" id="default-input" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={value} 
            onChange={e =>setValue(e.target.value)}/>
            <button type='submit' className='justify-end hover:bg-sky-300 bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
              Enviar
            </button>
          </form>
      </div>
    </div>
    </div>
  );
}

export default App;
