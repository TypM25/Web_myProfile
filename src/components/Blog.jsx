import React, { useState } from 'react'

const [Image, setImage] = useState("");
const [Content, setContent] = useState("");



function Blog() {
  return (
    <div>
      <div className='m-5 h-[350px] w-[350px] bg-blue-200 rounded-lg'>
        <img src="{setImage}" alt="" />
        <div>
          <p>{Content}</p>
        </div>
      </div>
    </div>
  )
}

export default Blog