import axios from "axios"
import React from "react"

export default function Update(props){
    return(<div>
        <button onClick={()=>axios.put(`http://127.0.0.1:8000/api/data/${props.link}/`, {
            name:props.name
        })} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
</div>)
}