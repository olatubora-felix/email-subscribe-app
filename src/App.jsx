import { useState } from 'react';
import Img from './assests/image.jpg'

function App() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false)

  const handleOnchange = (event) => {
   return setEmail(event.target.value);
  }

 


  const handleClick = () => {
   if (email !== '' && email.includes('@gmail.com') && email.length >= 7) {
     return setIsValid(true)
   } 
   
    
  }


  return (
    <div className="flex  items-center justify-center h-screen bg-zinc-700">
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div className="flex flex-col md:flex-row rounded-l-xl">
          
          {/* Image */}
          <img src={Img}
            alt="card"
            className='object-fit rounded-xl h-80
              md:h-64 md:rounded-l-xl md:rounded-r-none
              transform hover:scale-105 
              duration-200 hover:rounded-xl'
          />
          {/* Content */}
          <div className="p-6 md:p-12">
            <h2 className="font-medium font-serif text-xl text-center md:text-left text-white">
              Get diet and fitness in your inbox
            </h2>
            <p className="max-w-xs my-4 text-sm leading-5 tracking-wide text-center md:left text-white">
                Eat better and exercise better signup for diet & fitness newsletter
            </p>
              {isValid && <p className='text-green-600 text-center'>Thanks for subscribing</p> }
            <div className="flex flex-col md:flex-row mt-5 space-y-4 md:space-x-3 md:space-y-0">
              <input type="text"
                placeholder='Enter your email address'
                className='p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-sm placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none rounded-xl'
                onChange={handleOnchange} />
              <button
                className="px-5 py-3 text-sm rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 
                hover:text-white duration-500" onClick={handleClick}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
