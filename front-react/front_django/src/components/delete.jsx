import axios from "axios"
import React from "react"

export default function Delete(props){
    function deletar(){
        try{
            axios.delete(`http://127.0.0.1:8000/api/data/${props.link}`)
        }catch(error){
            console.error('error',error.message)
        }
    }
    return(<div>
        <button onClick={deletar} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-700 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
</div>)
}