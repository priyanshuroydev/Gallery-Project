import React from 'react'

const card = (props) => {
  return (
    <div>
       <a href={props.elem.url} target='_blank'>
          <div className='h-60 w-65 bg-white overflow-hidden rounded-lg'>
        <img className='h-full w-full  object-cover' src= {props.elem.download_url} alt="" />
      </div>
      <h2 className='font-bold mt-2 flex justify-center items-center text-lg'>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default card
