import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Card from './components/card'
function App() {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)


  const getData = async ()=>{
   const response =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)

   setUserData(response.data)
   console.log(response.data)
  }
  useEffect(() => {
    getData()
  },[index])
  

  let printData = <h3 className=' text-gray-300 text-lg absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2'>Loading........</h3>

  if (userData.length>0){
    printData = userData.map((elem , idx)=>{
      return <div key={idx}>
       <Card elem={elem}/>
      </div>
    })
  }


  return (
    <div className='bg-black min-h-screen p-4 text-white flex flex-col'>
      <div className='flex flex-wrap gap-6 flex-1'>
        {printData}
      </div>
      <div className='flex justify-center items-center p-4 gap-3 mt-auto'>
        <button style = {{opacity: index == 1 ? 0.5 : 1 }} onClick={()=>{
          if(index > 1 ){
            setIndex(index-1)
            setUserData([])
          }
        }} className='bg-amber-400 text-black px-4 py-2 rounded font-bold cursor-pointer active:scale-95 hover:bg-amber-500'>Prev</button>
        <h4>Page {index}</h4>
        <button onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }}className='bg-amber-400 text-black px-4 py-2 rounded font-bold cursor-pointer active:scale-95 hover:bg-amber-500'>Next</button>
      </div>
    </div>
  )
}

export default App
